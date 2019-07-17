<template>
  <div id="main" >
    <v-container id="hello" grid-list-md  align-center>
      <v-layout row wrap >
        <v-flex d-flex xs12 sm12 md3>
          <v-layout row wrap align-center>
            <v-flex d-flex md12>
              <v-card flat>
                <v-container>
                  <v-avatar size="200px" color="green">
                    <!-- <img
                      src="https://scontent-tpe1-1.cdninstagram.com/vp/f576d2a9217ef310f6e65dbd4aa6eb71/5D8B40A1/t51.2885-15/e35/47583983_359007271474690_4349700514170901752_n.jpg?_nc_ht=scontent-tpe1-1.cdninstagram.com"
                      alt="headshot"> -->
                    <img src="@/assets/headshot.png" alt="headshot" />
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
              <v-card color="gray" flat>
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
      <v-layout row wrap>
        <v-flex d-flex xs12 sm4 md4>
          <v-layout row wrap align-center>
            <v-flex d-flex md12>
              <v-card flat>
                <v-card-title class="bord12">
                  <img src="@/assets/pacman.png" />
                  <span class="titleText bold animated fadeInLeft delay-2s">語言能力</span>
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
              <v-card >
                <v-card-title class="bord12">
                  <img src="@/assets/pacman.png" />
                  <span class="titleText bold animated fadeInLeft delay-1s">使用工具</span>
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
                  <span class="titleText bold animated fadeInLeft delay-2s">使用框架{{position}}</span>
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
        <!-- 程式能力開始 -->
        <v-flex d-flex xs12 sm12 md12>
          <v-layout row wrap align-center>
            <v-flex d-flex md12>
              <v-card flat>
                <v-card-title class="bord12">
                  <img src="@/assets/pacman.png" />
                  <span class="titleText bold animated fadeInLeft delay-3s">程式能力</span>
                </v-card-title>
                <v-divider class="mx-3"></v-divider>
                <div>
                  <v-layout row wrap style="padding:10px 0px">
                    <v-flex v-for="program in programs" :key="program.name" md3 sm6 xs6>
                      <v-card >
                        <v-card-text class="px-0">{{program.name}}</v-card-text>
                          <span class="abilityText">  {{ program.value }}%</span>
                        <div>
                        <v-progress-linear
                          height="20"
                          :value="program.value"
                          color="teal"
                        >
                        </v-progress-linear>
                        </div>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <!-- 程式能力結束 -->
        <v-flex d-flex xs12 sm12 md12 id="testProject">
          <v-layout row wrap align-center>
            <v-flex d-flex md12>
              <v-card flat>
                <v-card-title class="bord12">
                  <img src="@/assets/pacman.png"/>
                  <span class="titleText bold animated fadeInLeft delay-3s" id="#project">專案參與</span>
                </v-card-title>
                <v-divider class="mx-3"></v-divider>
                <div>
                  <v-container >
                  <v-layout row wrap style="padding:10px 0px">
                    <v-flex v-for="project in projects" :key="project.id" md4 sm6 xs12>
                      <v-card
                        class="mx-auto"
                        color="#4bc0c5"
                        dark
                        max-width="400"
                      >
                        <v-card-title class="justify-center">
                            <span class="title font-weight-light">{{project.name}}</span>
                        </v-card-title>
                        <v-divider class="mx-3"></v-divider>
                        <v-card-text class="headline font-weight-bold"  justify-center>
                          <v-layout justify-center>
                          <v-avatar
                            tile
                            size= "100%"
                            color="#4bc0c5"
                          >
                            <img
                              :src="project.photo"
                            >
                          </v-avatar>
                          </v-layout>
                        </v-card-text>
                           <div>
                            <v-layout row wrap v-for="( projectTitle, index) in projectTitles" :key="index">
                              <v-flex md4>
                                <v-card dark color="#4bc0c5" flat>
                                  <v-card-text style="text-align: left;">{{projectTitle}}</v-card-text>
                                </v-card>
                              </v-flex>
                              <v-flex md8>
                                <v-card dark color="#4bc0c5 " flat>
                                  <v-card-text style="text-align: left;" v-if="index===0">{{project.title}}</v-card-text>
                                  <v-card-text style="text-align: left;" v-if="index===1">{{project.content}}</v-card-text>
                                  <v-card-text style="text-align: left;" v-if="index===2">{{project.period}}</v-card-text>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </div>
                      </v-card>
                    </v-flex>
                  </v-layout>
                  </v-container>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  /* eslint-disable */
    //忽略所有提示
    data() {
      return {
        active: null,
        text: '測試用字串',
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
        programs: [
          {
            name: 'Android',
            score: 80,
            value:0,
            interval:{}
          },
          {
            name: 'Java',
            score: 80,
            value:0,
            interval:{}
          },
          {
            name: 'PHP',
            score: 50,
            value:0,
            interval:{}
          },
          {
            name: 'Python',
            score: 40,
            value:0,
            interval:{}
          },
          {
            name: 'JavaScript',
            score: 30,
            value:0,
            interval:{}
          }
        ],
        projectTitles:[
          '專案名稱',
          '負責內容',
          '專案期間'
        ]
        ,
        projects: [{
            id:0,
            name: '聯華電子股份有限公司',
            title:'進料檢驗系統',
            content: '前後端開發、需求產出',
            period:'2019/07',
            detail:'詳細為機密事項',
            tech:'Android、Java',
            photo: require('@/assets/umc.jpg')
          },
          {
            id:1,
            name: '九彥科技股份有限公司',
            title:'iOS飛霸鴿隻管理系統',
            content: '專案管理、需求產出',
            period:'2018/12',
            detail:'管理四人團隊，以使用者需求調查、時程管理、人員編排以及協調設計師與工程師為主。\n其專案內容為以Xcode工具並以Swift編寫iOS應用程式，大部分為管理團隊，並進行部分程式Debug及前端介面修改',
            tech:'Xcode、Swift3',
            photo: require('@/assets/jyan3.png')
          },
          {
            id:2,
            name: '九彥科技股份有限公司',
            title:'Android飛霸鴿隻管理系統',
            content: '專案管理、前後端開發',
            period:'2019/01',
            detail:'以Android  Studio工具並Java編寫Android應用程式\n其包含MySQL及SQLite資料庫連結、PHP及Laravel網頁後台管理、Apache架設虛擬伺服器、使用者測試、使用者需求調查、系統維護\n並有GooglePlay上架經驗',
            tech:'Android、Java',
            photo: require('@/assets/jyan2.png')
          },
           {
            id:3,
            name: '九彥科技股份有限公司',
            title:'飛霸鴿隻管理後台',
            content: '前後端開發、伺服器架設',
            period:'2018/01',
            detail:'以PHP的Laravel 框架開發後台，並以Bootstrap的AdminLte模板進行後台的前端設計。其伺服器架設於Windows server2012上以Apache及MySQL運行',
            tech:'PHP、Laravel、MySQL',
            photo:require('@/assets/jyan4.png')
          },
          {
            id:4,
            name: 'SideProject',
            title:'中華徵信社5000大企業資料庫爬蟲工具',
            content: '軟體開發',
            period:'2019/03',
            detail:'以中華徵信社台灣5000大企業資料庫爬蟲工具\n使用 selenium 套件 前置需安裝webdriver\n並以中科大圖書系統為入口 需有中科大在校帳號密碼才可使用',
            tech:'Python',
            photo:require('@/assets/jyan2.png')
          }
        ]
      }
    },
    methods: {
      next() {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      },
      ...mapActions([
        'actionAnchor'
      ])
    },
    computed: {
      ...mapGetters({
        // getCount return value 將會存在別名為 count 的 data 上
        position: 'getPosition',
      }),
      setAnchor: function(){
        var obj = document.getElementById('testProject');
        var oPos = obj.offsetTop;
        this.$store.dispatch('actionAnchor',oPos)
        console.log('錨點位置',oPos);
      }
    },
    beforeDestroy () {
   
    },
    mounted () {
      //動畫
      this.programs.forEach(function(el) {
        el.interval = setInterval(() => {
        if (el.value === el.score-1) {
          clearInterval(el.interval);
        }
        el.value ++
      }, 100)
      });
      //抓錨點
      const vm = this;
      vm.fullWidth = window.innerWidth;
      vm.fullHeight = window.innerHeight;
      window.onresize = () => {
        vm.fullWidth = window.innerWidth;
        vm.fullHeight = window.innerHeight;
        console.log(vm.fullHeight);
      };
      this.setAnchor;
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
    margin: 10px 10px;
  }

  H2 {
    font-size: 16px;
    margin: 15px 10px;
  }

  img {
    padding: 1px;
  }
 
  .titleText {
    font-size: 25px;
    font-weight: bold;
    font: black;
    margin-left: 10px;
  }
  .abilityText{
    font-size: 40px;
    font-weight: bold;
    font: black;
  }

  .leftText {
    text-align: left;
    margin-left: 20px;
  }
  .alignText{
    text-align: center;
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
