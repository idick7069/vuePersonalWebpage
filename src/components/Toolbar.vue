<template>
  <div id="toolbar">
    <v-toolbar dark color="#4bc0c5" scroll-off-screen scroll-target="#hello">
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
      <v-btn v-for="part in parts"
             :key="part"
             flat
             class="mx-1 "
             style="font-size: 15px;"
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
export default {
  name: 'toolbar',
  /* eslint-disable */
  //忽略所有提示
  data: () => ({
    logo: 'F',
    parts:[
      '關於',
      '學經歷',
      '專業技能',
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
          linkUrl:'#',
        },{
          linkid:5,
          linkIcon: 'fab fa-instagram',
          linkUrl:'#',
        }
    ]
  }),
  methods:{

  }
}
</script>
<style scoped>
#toolbar{
  font-family:'Microsoft JhengHei';
}
</style>
