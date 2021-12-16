<template>
  <div>
    <div>
      <v-card to="detail">
        <v-img
          src="https://www.dondeir.com/wp-content/uploads/2019/11/portada-4.jpg"
          gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
          :aspect-ratio="16 / 9"
          height="500px"
          dark
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">
              <v-col>
                <v-btn color="accent" to="category">Taco Time</v-btn>
              </v-col>
              <v-col cols="12" md="10" lg="8" xl="7">
                <h2 class="text-h3 py-3" style="line-height: 1.2">
                  Encuentra aquí las mejores sucursales de Tacos
                </h2>
              </v-col>
              <v-col class="d-flex align-center">
                <v-avatar class="elevation-4" color="accent">
                  <v-icon large>mdi-feather</v-icon>
                </v-avatar>

                <div class="text-h6 pl-2">En Maravatío</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-img>
      </v-card>
    </div>

    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">Taquerias</h2>

            <v-row>
              <v-col cols="6" lg="4">
                <v-card flat dark>
                  <v-img
                    src="https://www.aquien.mx/wp-content/uploads/2019/08/rey-4-1024x768.jpg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                    height="600px"
                    class="elevation-2 fill-height"
                  >
                    <div
                      class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn color="accent">Tacos Chuy</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          Estamos ubicados frente a caja Morelia Valladolid en la colonia centro de Maravatio. Local en Casa Blanca tambien.
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">447 150 8963</div>
                        </div>
                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>

              <v-col cols="6" lg="4">
                <v-card flat dark>
                  <v-img
                    src="http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2017/10/58e97ce3be9ec-image.jpg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                    height="600px"
                    class="elevation-2 fill-height"
                  >
                    <div
                      class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn color="accent">Tacos Gaby</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                        >
                         Estamos ubicados a un costado de la gasolinera que esta atras de la presa de San Miguel Curahuango.
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">443 150 4789</div>
                        </div>
                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>

              <v-col cols="6" lg="4">
                <v-card flat dark>
                  <v-img
                    src="https://www.eluniversalqueretaro.mx/sites/default/files/2017/12/02/principal_web_1.jpg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                    height="600px"
                    class="elevation-2 fill-height"
                  >
                    <div
                      class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn color="accent">Tacos Bolis</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          Estamos ubicados a un castado del segundo puente de San Miguel Curahuango, calle Emiliano Zapata #33.
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">443 163 44 02</div>
                        </div>
                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>

      <v-col>
        <div class="pt-16">
          <siderbar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>
