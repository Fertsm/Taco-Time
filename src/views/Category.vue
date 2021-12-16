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
    <br>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div>
              <h2 class="text-h4 font-weight-bold">Activos</h2>

              <h4 class="text-h6">Encuentra aquí las taquerias disponibles las 24hrs del dia.</h4>
            </div>

            <v-divider class="my-4"></v-divider>
            
    <div class="pt-4">
        <div class="pt-4">
        <div class="d-flex align-center mb-6" >
          <v-avatar color="accent1" size="64">
            <v-icon dark x-large>mdi-feather</v-icon>
          </v-avatar>

          <div class="pl-2">
            <div class="text-h6">Taqueria Gaby</div>
            <div class="text-subtitle-1">Abrimos de 4pm a 3am.</div>
          </div>
        </div>
      </div>
    </div>

 <div class="pt-4">
        <div class="pt-4">
        <div class="d-flex align-center mb-6" >
          <v-avatar color="accent1" size="64">
            <v-icon dark x-large>mdi-feather</v-icon>
          </v-avatar>

          <div class="pl-2">
            <div class="text-h6">Taqueria Chuy</div>
            <div class="text-subtitle-1">Abrimos las 24hrs.</div>
          </div>
        </div>
      </div>
    </div>

     <div class="pt-4">
        <div class="pt-4">
        <div class="d-flex align-center mb-6" >
          <v-avatar color="accent1" size="64">
            <v-icon dark x-large>mdi-feather</v-icon>
          </v-avatar>

          <div class="pl-2">
            <div class="text-h6">Tacos Hernandez</div>
            <div class="text-subtitle-1">Abrimos de 3pm a 5am.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <div class="pt-4">
        <div class="d-flex align-center mb-6" >
          <v-avatar color="accent2" size="64">
            <v-icon dark x-large>mdi-feather</v-icon>
          </v-avatar>

          <div class="pl-2">
            <div class="text-h6">Taqueria Bolis</div>
            <div class="text-subtitle-1">No Disponible</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <div class="pt-4">
        <div class="d-flex align-center mb-6" >
          <v-avatar color="accent2" size="64">
            <v-icon dark x-large>mdi-feather</v-icon>
          </v-avatar>

          <div class="pl-2">
            <div class="text-h6">Taqueria Jose</div>
            <div class="text-subtitle-1">No Disponible</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-4">
      <div class="pt-4">
        <div class="d-flex align-center mb-6" >
          <v-avatar color="accent2" size="64">
            <v-icon dark x-large>mdi-feather</v-icon>
          </v-avatar>

          <div class="pl-2">
            <div class="text-h6">Taqueria Lupita</div>
            <div class="text-subtitle-1">No Disponible</div>
          </div>
        </div>
      </div>
    </div>
           
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

<script>
export default {
  name: "Category",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>
