<template>
  <div class="hello">
    <div>
    </div>
    <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap align-center="">
            <v-flex d-flex md12 id="hello">
              <v-card>
                <v-container>
                  <v-avatar size="200px" color="green">
                    <img
                      src="https://scontent-tpe1-1.cdninstagram.com/vp/f576d2a9217ef310f6e65dbd4aa6eb71/5D8B40A1/t51.2885-15/e35/47583983_359007271474690_4349700514170901752_n.jpg?_nc_ht=scontent-tpe1-1.cdninstagram.com"
                      alt="headshot">
                  </v-avatar>
                  <H1>吳承剛</H1>
                  <H2>Android Development</H2>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md9>
          <v-layout row wrap>
            <v-flex d-flex md12>
              <v-card>
                <v-timeline align-center dense>
                  <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
                    <v-layout row wrap align-center="">
                    <v-flex d-flex xs12 sm6 md4>
                      <template>
                        <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
                      </template>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md8>
                      <div class="py-3">
                      <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">Lorem ipsum</h2>
                      <div>
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed
                        euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
                        voluptatibus, vix an salutandi sententiae.
                      </div>
                    </div>
                    </v-flex>
                    </v-layout>
                  </v-timeline-item>
                </v-timeline>
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

  #hello {
    margin: 30px;
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
  }

  img {
    padding: 1px;
  }

</style>
