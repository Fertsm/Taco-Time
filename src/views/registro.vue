<template>
  <div >
    <v-row >
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div >
            <div class="my-2">
              <h2 class="text-h4 font-weight-bold">Registrate con nosotros</h2>
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
      <h3 class="text-h5 font-weight-medium pb-4">Registrate para poder realizar tú pedido</h3>

      <v-divider></v-divider>
  <v-text-field
        label="Nombre Completo"
        solo
        type="text"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
      <v-text-field
        label="Edad"
        solo
        type="number"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
      <v-text-field
        label="Telefono"
        solo
        type="number"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
      <v-text-field
        label="Direccion"
        solo
        type="texto"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
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
      <v-btn color="accent" block large>Registrarse</v-btn>
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
  </div>
</template>


<style lang="scss" scoped>
.authors {
  position: relative;
  top: -50px;
  margin-bottom: -50px;
}
</style>
