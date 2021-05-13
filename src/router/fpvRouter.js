import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../layout/starter/FPVLayout.vue';
import About from '../pages/About.vue';
import OSS from '../pages/OSS.vue';
import VideoOut from '../pages/VideoOut/VideoOut.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/video-out',
      component: DashboardLayout,
      children: [
        {
          path: 'video-out',
          name: 'video-out',
          components: { default: VideoOut }
        },
        {
          path: 'about',
          name: 'about',
          components: { default: About }
        },
        {
          path: 'oss',
          name: 'oss',
          components: { default: OSS }
        }
      ]
    }
  ]
});
