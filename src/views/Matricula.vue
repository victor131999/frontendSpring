<template>
    <v-container>
      <div>
        <v-layout row>
          <v-flex py-15></v-flex>
        </v-layout>
        <v-layout row>
          <v-flex py-15>
            <v-row>

              <v-col>
                <v-flex>
                  <v-icon size="350">
                    mdi-card-account-details
                  </v-icon>
                </v-flex>
              </v-col>
              <v-col>
                <v-card rounded outlined xs7 :elevation="8">
                  <v-card-title>
                    <v-layout  justify-space-between>
                      <h3 class="headline mb-0">Registrarse</h3>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-flex pb-15 pt-10>
                      <p>Username:</p>

                    </v-flex>
                    </v-card-text>
            </v-card-title>
          </v-card>
      </v-col>
</v-row>
</v-flex>
</v-layout>
</div>
</v-container>

</template>
<script>

export default {
name: 'Matricula',
data() {
return {
dialog:false,
dialogDelete:false,
headers: [
{
    text: 'Nombre',
    align: 'start',
    value: 'Name'

},
{
    text: 'Detalles',
    value: 'Details'
},
{
    text: 'Precio',
    value: 'Price'
},
{
    text: 'Stock',
    value: 'Stock'
},
{
    text: 'Actions',
    value: 'actions',
    sortable: false
}
],
data: [],
editedIndex: -1,
        }
    },



}
</script>