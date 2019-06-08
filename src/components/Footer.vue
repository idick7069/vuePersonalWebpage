<template>
<div id="basefooter">
    <v-footer
      dark
      height="auto"
      color="#0D9298"
    >
      <v-card
        class="flex"
        flat
        tile
        color="#4bc0c5"
      >
        <v-card-actions class="justify-center">
          <strong>{{copyright}}</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
</div>
</template>
<script>
export default({
  name: 'basefooter',
  data: () => ({
    copyright: 'Copyright © 2019 by Frank Wu'
  })
})
</script>
