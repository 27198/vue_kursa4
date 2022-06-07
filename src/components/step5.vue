<template>
  <div>
      <h2>Название задачи: {{$route.query.taskName}}</h2>
      <h2>Описание задачи: {{$route.query.desckName}}</h2>
      <h2>Время на выполнение задачи в часах: {{$route.query.taskTime}}</h2>
      <h2>Исполнитель: {{$route.query.taskMaker}}</h2>
  </div>
</template>

<script>
export default {
  name: 'step-5',
  data (){
      return {
        
      }
  },
  computed: {
      
      }
  }
</script>


<style scoped>
div {
    background-color: rgb(112, 174, 112);
}

</style>
