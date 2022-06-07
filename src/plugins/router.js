import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import step2 from '../components/step2.vue'
import step3 from '../components/step3.vue'
import step4 from '../components/step4.vue'
import step5 from '../components/step5.vue'

const routes=[
 {path:"/", component:Home},
 {path:"/step2", component:step2, name:'2'},
 {path:"/step3", component:step3, name:'3'},
 {path:"/step4", component:step4, name:'4'},
 {path:"/step5", component:step5, name:'5'},

];

export default createRouter({
 history: createWebHistory(),
 routes: routes
});