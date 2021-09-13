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
                            <v-flex >
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
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <v-flex pb-15 pt-10>
                                        <p>Username:</p>
                                        <v-form>
                                            <v-text-field
                                                required
                                                v-model="user.username"
                                                label="Username"
                                                outlined
                                                dense
                                              >
                                            </v-text-field>
                                            <v-flex py-2>
                                                <label>Email</label>
                                              <v-text-field
                                                  required
                                                  v-model="user.email"
                                                  label="Email"
                                                  outlined
                                                  dense>
                                              </v-text-field>
                                            </v-flex>
                                            <v-flex py-2>
                                                <label>Password</label>
                                              <v-text-field
                                                  required
                                                  v-model="user.password"
                                                  label="Password"
                                                  outlined
                                                  dense>
                                              </v-text-field>
                                            </v-flex>
                                            
                                        </v-form>
                                    </v-flex>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer>                                    </v-spacer>
                                    <v-btn @click="handleRegister" color="primary">Registrar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>

        </div>
    </v-container>
</template>
<script>
import User from '../models/user.js';
import AuthService from '../api/auth_service.js';

export default {
    name: 'Register',
    components: {

    },
    data() {
        return {
            user: new User('', '', [], "", ""),
            pswd_strength:0,
            conf_pswd_strength:0,

        }
    },
    methods: {
        handleRegister(){
          AuthService.register(this.user);
        },
    }
}
</script>