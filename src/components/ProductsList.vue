<template>
    <div>
        <v-card>

        <v-data-table
            dense
            :headers="headers"
            :items="data"
            item-key="id"
            class="elevation-1"
        >
        
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Matriculas</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog
                        v-model="dialog"
                        max-width="500px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                dark
                                class="mb-2"
                                v-bind="attrs"
                                v-on="on"
                            >
                            Crear
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col
                                        >
                                            <v-text-field
                                                v-model="editedItem.cedula_persona"
                                                label="Cedula"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                        
                                    </v-row>
                                    <v-row>
                                    </v-row>
                                    <v-row>
                                        <v-col
                                        >
                                            <v-text-field
                                                v-model="editedItem.nrc_curso"
                                                label="NRC"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="dark"
                                    text
                                    @click="close"
                                >
                                    Cancelar
                                </v-btn>
                                <v-btn
                                    dark
                                    @click="save"
                                >
                                    Guardar
                                </v-btn>
                            </v-card-actions>

                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    class="mr-2"
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
            </template>

        </v-data-table>
        </v-card>
    </div>
</template>
<script>
import ProductsService from '../api/products_service';
import Product from '../models/product';
export default {
    name: 'ProductsList',
    data() {
        return {
            dialog:false,
            dialogDelete:false,
            headers: [
                {
                    text: 'Cedula',
                    align: 'start',
                    value: 'cedula_persona'

                },
                {
                    text: 'NRC',
                    value: 'nrc_curso'
                },

            ],
            data: [],
            editedIndex: -1,
            editedItem: new Product('', '', ''),
            defaultItem: new Product('', '', '')
        }
    },

    computed:{
        formTitle(){
            return this.editedIndex === -1 ? 'Nueva matrícula': 'Editar matricula'
        },
        
    },
    watch:{
        dialog(val){
            val || this.close()
        },
        dialogDelete(val){
            val||this.closeDelete()
        },  
        
    },

    methods:{

        editItem(item){
            console.log(item)
            this.editedItem = item
            this.dialog = true
        },

        close(){
            this.dialog = false;
            this.$nextTick(()=>{
                this.editedItem = Object.assign({}, this.defaultItem)
            })
        },
        closeDelete(){
            this.dialogDelete = false;
            this.$nextTick(()=>{
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1;
            })

        },
        save(){
                ProductsService.createProduct(this.editedItem).then(
                    (res)=>{
                        this.$swal('Bien', 'Se ha matriculado correctamente', 'OK');  

                        console.warn(res.data)
                        
                    }
                ).catch(
                    (err)=>console.warn(err.response))
            this.close()
        }
    }


}
</script>