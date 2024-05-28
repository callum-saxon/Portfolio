import { createRouter, createWebHistory } from 'vue-router';
import MainContent from '@/components/MainContent.vue';
import ProjectView from '@/views/ProjectView.vue';

const routes = [
  {
    path: '/',
    name: 'MainContent',
    component: MainContent,
  },
  {
    path: '/project/:id',
    name: 'ProjectView',
    component: ProjectView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;