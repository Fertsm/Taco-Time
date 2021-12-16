<template>
  <div>
    <div>
      <h3 class="text-h5 font-weight-medium pb-4">Taquerias recomendadas</h3>

      <v-divider></v-divider>

      <div>
        <v-row  class="py-2">
          <v-col cols="12" md="6" lg="5">
            <v-card height="100%" flat>
              <v-img
                src="https://mxcity.mx/wp-content/uploads/2019/03/taco-al-pastor-mejor-platillo-del-mundo-8.jpg"
                :aspect-ratio="16 / 9"
                height="100%"
              ></v-img>
            </v-card>
          </v-col>

          <v-col>
            <div>
              <v-btn depressed color="accent" href="" small>Chatear</v-btn>

              <h3 class="text-h6 font-weight-bold primary--text py-3">
                Conoces taqueria Migue? Estamos ubicados a un costado de la presa de San Miguel
              </h3>

              <div class="d-flex align-center">
                <v-avatar color="accent" size="24">
                  <v-icon dark small>mdi-feather</v-icon>
                </v-avatar>

                <div class="pl-2">443 156 7890</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

      
  </div>
</template>
