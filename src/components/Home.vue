<template>
  <div>
      <h1>Название задачи</h1>
      <input type="text" v-model="taskName">
      <button :disabled="isDisabled" @click="next()">Далее</button>
  </div>
</template>

<script>
export default {
  name: 'Home-file',
  data (){
      return {
        disabled: true,
        taskName:''
      }
  },
  computed: {
      isDisabled(){
          let status = this.taskName.length > 0 ? false : true 
          return status
      }
  },
  methods: {
      next(){
          this.$router.push(
              {
                  name: '2',
                  query: {taskName: this.taskName}
                //   path: './step2',
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
