<template>
  <div>
      <h1>Время на выполнение задачи в часах</h1>
      <input type="number" v-model="taskTime">
      <button :disabled="isDisabled" @click="next()">Далее</button>
  </div>
</template>

<script>
export default {
  name: 'step-3',
  data (){
      return {
        taskTime: null
      }
  },
  computed: {
      isDisabled(){
          let status = this.taskTime > 0 && this.taskTime < 100 ? false : true 
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
                  name: '4',
                  query: {
                      ...this.query,
                      taskTime: this.taskTime
                      }
                //   path: './step3',
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
