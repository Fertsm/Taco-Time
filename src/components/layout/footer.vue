<template>
  <div>
    <v-footer color="primary" dark app absolute>
      <v-container>
        <v-row align="start">
          <v-col cols="12" md="3">
            <h4 class="text-h5 font-weight-bold">
              TACO TIME APP
            </h4>
            <p class="text-body-1">
              Somos un grupo de trabajo que pretende brindar soluciones tecnologicas a las necesidades del usuario, gracias por descargar Taco Time.
            </p>
          </v-col>


          <v-col cols="12" md="3">
            <v-list flat color="transparent">
              <v-subheader class="text-h6"></v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in shock"
                  :key="i"
                  :href="item.href"
                  dense
                  target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-body-1"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="3">
            <div>
              <h5 class="text-h6 font-weight-bold">
                Registrate
              </h5>
              <p class="text-body-1">
                Para formar parte de nuestra comunidad registrate aqui!
              </p>
            </div>

            <v-row>
              <v-col cols="8">
                <v-text-field
                  label="E-mail"
                  solo
                  light
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-btn large block color="secondary">
                  Registrate
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <div class="text-center mt-6">
          Copyright &copy;
          <a
            class="white--text"
            href="https://heroui.net"
            target="_blank"
            rel="noopener noreferrer"
            >HreoUI</a
          >
          {{ new Date().getFullYear() }}. All rights reserved. By: Fer Sánchez & Sol Mejía
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

