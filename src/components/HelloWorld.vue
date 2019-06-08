<template>
  <div class="hello">
    <div>
    </div>
    <h1>{{ 123 }}</h1>
      <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex  md12>
              <v-card color="indigo" dark>
                 <v-container>
                   <v-avatar color="#0D9298" size="50px">
                      <span class="white--text headline">123</span>
                  </v-avatar>
                  <H1>Android Development</H1>
                 </v-container>
              </v-card>
            </v-flex>
            <v-flex d-flex  md12>
              <v-card color="indigo" dark>
                <v-card-text>123</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
         <v-flex d-flex xs12 sm6 md9>
          <v-layout row wrap>
            <v-flex d-flex md12>
              <v-card color="indigo" dark>
              </v-card>
            </v-flex>
            <v-flex d-flex md12>
              <v-card color="indigo" dark>
              </v-card>
            </v-flex>
          </v-layout>
         </v-flex>
       </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  /* eslint-disable */
  //忽略所有提示
  data () {
    return {
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{

}
</style>
