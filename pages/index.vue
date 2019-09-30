<template>
  <v-layout>
    <v-flex class="text-rigth">
      <h1>Application Definisions</h1>
      <v-textarea rows="25" label="データモデル" outlined v-model="schemasText"></v-textarea>
    </v-flex>
    <v-btn v-on:click.prevent="updateSchema(schemasText)" color='primary'>Save</v-btn>
  </v-layout>
</template>

<script>
export default {
  computed: {
    schemasText: {
      get () {
        return JSON.stringify(this.$store.state.schemas, null , "\t")
      },
      set (value) {
        try {
          this.$store.commit('updateSchema', JSON.parse(value))
          this.$store.commit('initializeDataBySchema')
          this.$store.commit('initializeItemsBySchema')
        } catch (e) {
          console.log(e)
        }
      },
    },
  },
  methods: {
    updateSchema: function(value) {
      try {
        this.$store.commit('initializeDataBySchema')
        this.$store.commit('initializeItemsBySchema')
        console.log('success')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
