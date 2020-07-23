import Vue from "vue";
import VueRouter from "vue-router";

import Login from '@/views/login';
import Index from '@/views/home';
import Home from '@/views/home/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '/',
    redirect:'login'
  },
  {
    path:'/login',//登录页面
    name:'login',
    component:Login
  },
  {
    path:'/index',//主页面
    name:'index',
    component:Index,
    children:[
      {
        path:'/home',//子页面首页
        name:'home',
        component:Home
      },
      {
        path:'/change_password',//修改密码
        name:'change_password',
        component:()=>import('../views/home/change_password.vue')
      },
      {
        path:'/score',//查询成绩
        name:'score',
        component:()=>import('../views/score/index.vue')
      },
      {
        path:'/exam',//我的考试
        name:'exam',
        component:()=>import('../views/exam/index.vue'),
      },
      {
        path:'/moni',//模拟练习
        name:'moni',
        component:()=>import('../views/practice/moni.vue')
      },
      {
        path:'/random',//随机练习
        name:'random',
        component:()=>import('../views/practice/random.vue')
      },
      {
        path:'/error',//错题练习
        name:'error',
        component:()=>import('../views/practice/error.vue')
      },
      {
        path:'/notice',//通知公告
        name:'notice',
        component:()=>import('../views/notice/index.vue')
      },
      {
        path:'/message',//系统消息
        name:'message',
        component:()=>import('../views/message/index.vue')
      },
      {
        path:'/examing',//考试页面
        name:'examing',
        component:()=>import('../components/examing.vue')
      },
      {
        path:'/answer',//查看答案
        name:'answer',
        component:()=>import('../components/answer.vue')
      },
      {
        path:'/notice_info',//查看答案
        name:'notice_info',
        component:()=>import('../views/notice/notice_info.vue')
      },
      {
        path:'/moni_record',//模拟记录
        name:'moni_record',
        component:()=>import('../views/practice/moni_record.vue')
      },
      {
        path:'/practice',//随机记录
        name:'practice',
        component:()=>import('../components/practice.vue')
      },
      {
        path:'/submit',//试卷提交
        name:'submit',
        component:()=>import('../components/submit_automatic.vue')
      },
    ],
    redirect: 'home'
  },
];

const router = new VueRouter({
  routes
});

export default router;
