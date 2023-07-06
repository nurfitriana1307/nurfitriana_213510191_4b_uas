import { createRouter, createWebHistory } from 'vue-router';

import Profile from '../components/profile.vue';
import Cuaca from '../components/Cuaca.vue';
import Lokasi from '../components/Lokasi.vue';
import Stopwatch from '../components/Stopwatch.vue';
import GameTicTacToe from '../components/GameTicTacToe.vue';
import Foto from '../components/Foto.vue';
import GamePuzzle from '../components/GamePuzzle.vue';

const routes = [
  { path: '/', component: Profile},
  { path: '/cuaca', component: Cuaca },
  { path: '/lokasi', component: Lokasi },
  { path: '/stopwatch', component: Stopwatch },
  { path: '/gametictactoe', component: GameTicTacToe },
  { path: '/foto', component: Foto },
  { path: '/gamepuzzle', component: GamePuzzle },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
