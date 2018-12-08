import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import SidebarBrowse from '../sidebars/SidebarBrowse.vue';

Vue.use(Router);

export default new Router({
  // to use this mode, configure server to always point to index file:
  // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    components: {
      default: BrowseParts,
      sidebar: SidebarBrowse,
    },
    children: [
      {
        path: 'heads',
        name: 'BrowseHeads',
        component: RobotHeads,
      },
      {
        path: 'arms',
        name: 'BrowseArms',
        component: RobotArms,
      },
      {
        path: 'torsos',
        name: 'BrowseTorsos',
        component: RobotTorsos,
      },
      {
        path: 'bases',
        name: 'BrowseBases',
        component: RobotBases,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  },
  ],
});
