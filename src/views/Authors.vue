<template>
  <div >
    <v-row >
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div >
            <div class="my-2">
              <h2 class="text-h4 font-weight-bold">Iniciar Sesión</h2>
            </div>

            <v-row>
              <v-col cols="12" md="6">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >



                  <div class="d-flex align-center">
                    <v-card
                      flat
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      hover
                    >
                           <div >
      <h3 class="text-h5 font-weight-medium pb-4">Inicia sesión para poder realizar tú pedido</h3>

      <v-divider></v-divider>

      <v-text-field
        label="E-mail"
        solo
        type="email"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
       <v-text-field
        label="Contraseña"
        solo
        type="password"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
      <v-btn color="accent" block large>Iniciar Sesión</v-btn>
    </div>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>

      <v-col>
        <div>
          <siderbar />
        </div>
      </v-col>
    </v-row>
<v-divider class="my-4"></v-divider>
    <div class="py-4">
                  <v-alert
                    class="font-italic text-h6 text-center"
                    border="left"
                    colored-border
                    color="accent"
                  >
                    Un taco al día es la llave de la alegría.
                  </v-alert>
                </div>
  </div>
</template>


<style lang="scss" scoped>
.authors {
  position: relative;
  top: -50px;
  margin-bottom: -50px;
}
</style>
