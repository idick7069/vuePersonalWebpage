<template>
  <div id="toolbar">
    <v-toolbar dark color="#4bc0c5" >
      <v-btn icon>
        <v-avatar color="#0D9298" size="32px">
          <span class="white--text headline">{{logo}}</span>
        </v-avatar>
      </v-btn>
      <v-divider
        class="mx-3"
        inset
        vertical
      ></v-divider>
      <v-btn v-for="(part, index) in parts"
             :key="index"
             flat
             class="mx-1"
             style="font-size: 15px;"
             @click="jumpAnchor(index)"
             >
             {{part}}
      </v-btn>
      <v-spacer></v-spacer>
     <v-btn
            v-for="link in links"
            :key="link.id"
            class="mx-3 hidden-sm-and-down"
            dark
            icon
            v-bind:href="link.linkUrl"
          >
            <v-icon size="24px">{{link.linkIcon}}</v-icon>
          </v-btn>
    </v-toolbar>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'toolbar',
  /* eslint-disable */
  //忽略所有提示
  data: () => ({
    logo: 'F',
    parts:[
      '關於',
      '學經歷',
      '相關技能',
      '程式能力',
      '相關作品'
    ],
    links:[{
          linkid:1,
          linkIcon: 'fas fa-clock',
          linkUrl:'https://wakatime.com/@FrankWu',
        },{
          linkid:2,
          linkIcon: 'fab fa-github',
          linkUrl:'https://github.com/idick7069',
        },{
          linkid:3,
          linkIcon: 'fab fa-facebook',
          linkUrl:'https://www.facebook.com/profile.php?id=100000328050353',
        },{
          linkid:4,
          linkIcon: 'fab fa-linkedin',
          linkUrl:'https://www.linkedin.com/in/%E6%89%BF%E5%89%9B-%E5%90%B3-b1426117b/',
        }
    ]
  }),
  methods:{
   jumpAnchor: function(el){
     console.log('轉至'+this.parts[el]+':'+this.position[el]);
    scrollTo(0,this.position[el]);
   },
   ...mapActions([
      'actionIncrease',
      'actionDecrease',
      'actionAnchor'
    ])
  },
  computed:{
    ...mapGetters({
      // getCount return value 將會存在別名為 count 的 data 上
      count: 'getCount',
      position: 'getPosition'
    })
  }
}
</script>
<style scoped>
#toolbar{
  font-family:'Microsoft JhengHei';
}
</style>
