import { createStore } from 'pinia';
import data from '@/data/data.json';

const useHeroeStore = createStore({
  id: 'heroe',
  state: () => ({
    list: data,
  }),
  getters: {
    heroes: (state) => state.list.heroes,
    antiHeroes: (state) => state.list.antiHeroes,
    aliens: (state) => state.list.aliens,
    humans: (state) => state.list.humans,
    villains: (state) => state.list.villains,
  },
});

export default useHeroeStore;
