<template>
  <div>
      <h1>Описание задачи</h1>
      <textarea type="text" v-model="descName"></textarea>
      <button :disabled="isDisabled" @click="next()">Далее</button>
  </div>
</template>

<script>
export default {
  name: 'step-2',
  data (){
      return {
        descName:''
      }
  },
  computed: {
      isDisabled(){
          let status = this.descName.length > 0 ? false : true 
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
                  name: '3',
                  query: {
                      ...this.query,
                      desckName: this.descName
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
