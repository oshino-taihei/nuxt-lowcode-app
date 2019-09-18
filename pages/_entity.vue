<template>
  <v-layout>
    <v-flex class="text-rigth">
      <h1>{{ key }}</h1>
      <h2>新規登録</h2>
      <v-form ref='form' v-on:submit.prevent="addItem(item)">
        <div v-for="(header, i) in headers" :key='i' class="fields">
          <v-text-field v-bind:label="header.text" outlined v-model="item[header.value]"></v-text-field>
        </div>
        <v-btn v-on:click.prevent="addItem(item)" color='primary'>新規登録</v-btn>
      </v-form>
      <hr>
      <h2>一覧</h2>
      <v-data-table
        :headers="headers" 
        :items="items"
        :items-per-page="5"
        class="elevation-1"
      >
      </v-data-table>
    </v-flex>
    <!-- 登録成功メッセージ -->
    <v-snackbar
      v-model="snackbar"
      :bottom="true"
      color="success"
      :multi-line="false"
      :right="true"
      :timeout="3000"
      :vertical="false"
    >
      新規登録しました
      <v-btn
        dark
        text
        @click="snackbar = false"
      >
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
export default {
  validate({params}) {
    if (params.entity == undefined) {
      return false
    } else {
      return true
    }
  },
  data: function() {
    return {
      key: this.$route.params.entity,
      headers: this.$store.state.schemas[this.$route.params.entity],
      items: this.$store.state.data[this.$route.params.entity],
      item: this.$store.state.item[this.$route.params.entity],
      snackbar: false,
    }
  },
  methods: {
    addItem: function(item) {
      this.$store.commit('addItem', {key: this.key, value: item})
      this.snackbar = true
    },
  }
}
</script>

<style scoped>
hr {
  margin-top: 10px;
}
h2 {
  margin: 10px 0px;
}
</style>