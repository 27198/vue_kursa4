<template>
  <div>
      <h1>Исполнитель</h1>
      <select v-model="selected">
          <option :value="maker" v-for="(maker, idx) in taskMaker" :key="idx">{{maker}}</option>
      </select>
      <button :disabled="isDisabled" @click="next()">Создать</button>
  </div>
</template>

<script>
export default {
  name: 'step-4',
  data (){
      return {
        taskMaker: ['Александр Суханов', 'Илья Тимощенко', 'Александр Максимов'],
        selected: null
      }
  },
  computed: {
      isDisabled(){
          let status = this.selected!==null ? false : true 
          return status
      },
      query(){
      return this.$route.query 
      }
  },
  methods: {
      next(){
          this.$router.push(
              {
                  name: '5',
                  query: {
                      ...this.query,
                      taskMaker: this.selected
                      }
                //   path: './step5',
              }
          )
      }
  }
}

</script>


<style scoped>
div {
    background-color: rgb(195, 184, 184);
}

</style>
