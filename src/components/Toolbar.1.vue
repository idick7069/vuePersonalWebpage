<template>
  <div id="toolbar">
    <v-toolbar dark color="#4bc0c5">
      <v-btn icon>
        <v-avatar color="#0D9298" size="32px">
          <span class="white--text headline">{{logo}}</span>
        </v-avatar>
      </v-btn>
      <v-btn v-for="part in parts"
             :key="part"
             flat
             >
             {{part}}
      </v-btn>
      <v-spacer></v-spacer>
     <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
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
    icons: [
      'fas fa-clock',
      'fab fa-github',
      'fab fa-facebook',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  })
}
</script>
<style>
#toolbar{
  font-family:'Microsoft JhengHei'
}
</style>
