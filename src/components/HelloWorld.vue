<template>
  <div id="main" class="scroll-y" style="max-height: 600px;">
    <v-container id="hello" grid-list-md style="height: 1000px;" align-center>
      <v-layout row wrap >
        <v-flex d-flex xs12 sm12 md3>
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
        <v-flex d-flex xs12 sm6 md9 hidden-md-and-up>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm12 md12 wrap>
              <v-card color="gray">
                <v-container grid-list-md>
                  <v-timeline align-top dense>
                    <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small left>
                      <v-layout row>
                        <v-flex d-flex xs12 sm6 md4>
                          <template>
                            <span wrap class="text-md-left" :class="`headline font-weight-bold ${year.color}--text`"
                              v-text="year.year"></span>
                          </template>
                        </v-flex>
                        <v-flex d-flex xs12 sm6 md8>
                          <v-container>
                            <h5 class="text-md-left" :class="`headline font-weight-light mb-3 ${year.color}--text`">
                              {{year.school}}</h5>
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
      <v-layout row wrap >
        <v-flex d-flex xs12 sm4 md4>
          <v-layout row wrap align-center>
            <v-flex d-flex md12>
              <v-card>
                <v-card-title class="bord12">
                  <img src="@/assets/pacman.png" />
                  <span class="titleText bold">語言能力</span>
                </v-card-title>
                <v-divider class="mx-3"></v-divider>
                <div class="leftText">
                  <v-layout row v-for="language in languages" :key="language.certificate">
                    <v-flex md4>
                      <v-list>
                        <v-list-tile-content>
                          <v-list-tile-title>{{language.certificate}}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list>
                    </v-flex>
                    <v-flex md8>
                      <v-list>
                        <v-list-tile-content>
                          <v-list-tile-title>{{language.score}}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list>
                    </v-flex>
                  </v-layout>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm4 md4>
          <v-layout row wrap align-center>
            <v-flex d-flex md12>
              <v-card>
                <v-card-title class="bord12">
                  <img src="@/assets/pacman.png" />
                  <span class="titleText bold">使用工具</span>
                </v-card-title>
                <v-divider class="mx-3"></v-divider>
                <div class="leftText">
                  <v-layout row v-for="tool in tools" :key="tool.name">
                    <v-flex md12>
                      <v-list>
                        <v-list-tile-content>
                          <v-list-tile-title>{{tool.name}}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list>
                    </v-flex>
                  </v-layout>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm4 md4>
          <v-layout row wrap align-center>
            <v-flex d-flex md12>
              <v-card flat>
                <v-card-title class="bord12">
                  <img src="@/assets/pacman.png" />
                  <span class="titleText bold animated fadeInLeft delay-1s">使用框架</span>
                </v-card-title>
                <v-divider class="mx-3"></v-divider>
                <div class="leftText">
                  <v-layout row v-for="framework in frameworks" :key="framework.name">
                    <v-flex md12>
                      <v-list>
                        <v-list-tile-content>
                          <v-list-tile-title>{{framework.name}}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list>
                    </v-flex>
                  </v-layout>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm12 md12>
          <v-layout row wrap align-center>
            <v-flex d-flex md12>
              <v-card flat>
                <v-card-title class="bord12">
                  <img src="@/assets/pacman.png" />
                  <span class="titleText bold animated fadeInLeft delay-1s">程式能力</span>
                </v-card-title>
                <v-divider class="mx-3"></v-divider>
                <div>
                  <v-layout row wrap>
                    <v-flex v-for="program in programs" :key="program.name" xs3>
                      <v-card>
                        <v-card-text class="px-0">{{program.name}}</v-card-text>
                        <svg width="177" height="40">
                        <!-- <rect  rx="2" ry="2" x="2" y="2" fill="none" stroke="#333" stroke-width="3" width="117" height="10"/>
                        <rect id="programSVG" rx="2" ry="2" x="2" y="2" fill="none" stroke="#0D9298" stroke-width="2" width="117" height="10"/> -->
                        <!-- <circle id="backdrop" r="90" cy="120" cx="120" stroke-width="3" stroke="#333" fill="none"/>
                        <circle id="progress" r="90" cy="120" cx="120" stroke-width="4" stroke="#0D9298" fill="none"/> -->
                        </svg>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </div>
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
    data() {
      return {
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        years: [{
            color: 'cyan',
            year: '2017-2019',
            school: '國立雲林科技大學',
            department: '資訊管理所 碩士'
          },
          {
            color: 'green',
            year: '2015-2017',
            school: '國立雲林科技大學',
            department: '資訊管理系 學士'
          },
          {
            color: 'pink',
            year: '2010-2015',
            school: '國立台中科技大學',
            department: '銀行保險科 副學士'
          }
        ],
        languages: [{
            certificate: 'TOEIC',
            score: '590'
          },
          {
            certificate: 'JLPT',
            score: 'N4'
          }
        ],
        tools: [{
            name: 'Vitural Studio Code'
          },
          {
            name: 'Android Studio'
          },
          {
            name: 'Xcode'
          },
          {
            name: 'SPSS'
          }
        ],
        frameworks: [{
            name: 'Laravel'
          },
          {
            name: 'Vue.js'
          }
        ],
        programs: [{
            name: 'Java',
            score: 80
          },
          {
            name: 'PHP',
            score: 50
          },
          {
            name: 'Python',
            score: 40
          },
          {
            name: 'JavaScript',
            score: 30
          }
        ]
      }
    },
    methods: {
      next() {
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
    /* margin:0px 200px; */
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

  .titleText {
    font-size: 25px;
    font-weight: bold;
    font-family: 'Microsoft JhengHei';
    font: black;
    margin-left: 10px;
  }

  .leftText {
    text-align: left;
    margin-left: 20px;
  }

  * {
    font-family: 'Microsoft JhengHei';
  }

  #programSVG{
    stroke-dashoffset: 2000;
    stroke-dasharray: 2000;
  animation: 1s myAnimation 5s ease  forwards;
  }

  #progress {
  stroke-dashoffset: 2000;
    stroke-dasharray: 2000;
  animation: 1s myAnimation 5s ease  forwards;
 
 
}
  

  @keyframes myAnimation
{
     /* 0%{ fill: #4BC0C8;}
    20%{ fill-opacity: #C779D0;}
    60%{ fill: #FEAC5E;}
    80%{ fill: #185a9d;} */

     100% {
        stroke-dashoffset: 1500;
      }
    
}

</style>
