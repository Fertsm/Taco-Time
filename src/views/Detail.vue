<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">
              <v-img
                src="https://www.ciudadypoder.mx/wp-content/uploads/2020/04/tacos-pastor-platillos-tradicionales-mexico.jpg"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 16px"
              ></v-img>

              <v-card-text>
                <div>
                  <v-btn color="accent">Taco Time</v-btn>
                </div>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <h4>Pedidos</h4>
                </div>

                <div class="text-body-1 py-4">
                  Contacta a tu taqueria favorita, has tu pedido con entrega a domiclio.
                  </div>

            
                <v-divider class="my-4"></v-divider>

                <div>
                     <v-row >
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div >
            <div class="my-2">
              <h2 class="text-h4 font-weight-bold">Pedidos</h2>
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
      <h3 class="text-h5 font-weight-medium pb-4">Llena todos los campos para poder realizar tú pedido</h3>


      <v-divider></v-divider>
    <v-text-field
        label="Nombre"
        solo
        type="name"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
    

    <v-text>Selecciona la taqueria de tu preferencia</v-text>
      <v-radio-group v-model="radioGroup">
      <v-radio
      label="Tacos Chuy"
        solo
        type="radio"
        outlined
        flat
        class="pt-4">
        
      </v-radio>
      <v-radio
      label="Tacos Gaby"
        solo
        type="radio"
        outlined
        flat
        class="pt-4">
        
      </v-radio>
      <v-radio
      label="Tacos Bolis"
        solo
        type="radio"
        outlined
        flat
        class="pt-4">
        
      </v-radio>
      </v-radio-group>

      <v-text-field
        label="Detalles de tu pedido, (Cantidad, sabor, verdura)"
        solo
        type="message"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
     

       <!-- <v-select
     label="Selecciona tú taqueria favorita"
        solo
        type="text"
        outlined
        flat
        class="pt-4" 
        item-value="tacosname"
        item-text="tacosid">
        <option value="tacos">Tacos Gaby</option>
        <option>Tacos Bolis</option>
        <option>Tacos</option></v-select>

   <v-select
     label="Selecciona el tipo de pedido"
        solo
        type="text"
        outlined
        flat
        class="pt-4" ></v-select>  -->
  

     
      <v-text-field
        label="Direccion"
        solo
        type="text"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
      <v-text-field
        label="Numero de telefono"
        solo
        type="text"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
      <v-btn color="accent" block large>Pedir</v-btn>
    </div>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
                </div>
  <v-divider class="my-4"></v-divider>
                <div class="py-4">
                  <v-alert
                    class="font-italic text-h6 text-center"
                    border="left"
                    colored-border
                    color="accent"
                  >
                    A falta de amor... Un viaje y unos tacos al pastor, ¡Por Favor!
                  </v-alert>
                </div>
              </v-card-text>
            </v-card>
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
    siderbar: () => import("@/components/details/sidebar")
  },
  

};
</script>
