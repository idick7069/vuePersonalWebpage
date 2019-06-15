<template>
  <div id="hello" class="scroll-y" style="max-height: 600px;">
    <v-container grid-list-md style="height: 1000px;">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap align-center>
            <v-flex d-flex md12>
              <v-card>
                <v-container>
                  <v-avatar size="200px" color="green">
                    <img
                      src="https://scontent-tpe1-1.cdninstagram.com/vp/f576d2a9217ef310f6e65dbd4aa6eb71/5D8B40A1/t51.2885-15/e35/47583983_359007271474690_4349700514170901752_n.jpg?_nc_ht=scontent-tpe1-1.cdninstagram.com"
                      alt="headshot">
                  </v-avatar>
                  <H1>吳承剛</H1>
                  <H2>Android App Development</H2>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md9>
          <v-layout row wrap align-content-center>
            <v-flex d-flex xs12 sm6 md8>
              <v-card max-width="1000px">
                <v-container fluid grid-list-lg>
                <v-timeline align-top dense>
                  <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small left>
                    <v-layout row>
                    <v-flex xs12 sm6 md3>
                      <template>
                        <span wrap class="text-md-left" :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
                      </template>
                    </v-flex>
                    <v-flex xs12 sm6 md9>
                      <v-container>
                          <h5  class="text-md-left" :class="`headline font-weight-light mb-3 ${year.color}--text`">{{year.school}}</h5>
                          <div class="text-md-left">
                            {{year.department}}
                          </div>
                      </v-container>
                    </v-flex>
                    <v-spacer />
                    </v-layout>
                  </v-timeline-item>
                </v-timeline>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap align-center>
            <v-flex d-flex md12>
              <v-card>
               <v-card-title class="bord12">
                <img src="@/assets/pacman.png"/>
                <span class="titleText bold">語言能力</span>
                 </v-card-title>
                 <v-divider
                  class="mx-3"
                 ></v-divider>
                 <div  class="leftText">
                  <v-layout>
                  <v-flex md6>
                    <v-card-text>TOEIC</v-card-text>
                  </v-flex>
                  <v-flex md6>
                    <v-card-text>590</v-card-text>
                  </v-flex>
                 </v-layout>
                 <v-layout>
                  <v-flex md6>
                    <v-card-text>JLPT</v-card-text>
                  </v-flex>
                  <v-flex md6>
                    <v-card-text>N4</v-card-text>
                  </v-flex>
                 </v-layout>
                 </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md9>
          <v-layout row wrap align-content-center>
            <v-flex d-flex xs12 sm6 md8 fill-height>
              <v-card>
                <img src="@/assets/pacman.png"/>
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      years: [
      {
        color: 'cyan',
        year: '2017-2019',
        school:'國立雲林科技大學',
        department:'資訊管理所'
      },
      {
        color: 'green',
        year: '2015-2017',
        school:'國立雲林科技大學',
        department:'資訊管理系'
      },
      {
        color: 'pink',
        year: '2010-2015',
        school:'國立台中科技大學',
        department:'銀行保險科'
      }
    ]
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
  h1,
  h2 {
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
  #hello{
    /* margin: 10%; */
  }
  H1 {
    font-size: 30px;
    font-weight: bold;
    font-family: 'Microsoft JhengHei';
    margin: 10px 10px;
  }

  H2 {
    font-size: 16px;
    margin: 15px 10px;
     font-family: 'Microsoft JhengHei';
  }

  img {
    padding: 1px;
  }
  .titleText{
     font-size: 25px;
    font-weight: bold;
    font-family: 'Microsoft JhengHei';
    font: black;
    margin-left: 10px;
  }
  .leftText{
    text-align: left;
  }


</style>
