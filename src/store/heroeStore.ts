import { createStore } from "pinia";
import data from "@/data/data.json";

const filterByName = (filter: string, list: { name: string }[]) => {
  return list.filter(it => it.name.toLowerCase().includes(filter.toLowerCase()));
};

const useHeroeStore = createStore({
  id: "heroe",
  state: () => ({
    list: data,
    filter: {
      name: ""
    }
  }),
  getters: {
    heroes: state => filterByName(state.filter.name, state.list.heroes),
    antiHeroes: state => filterByName(state.filter.name, state.list.antiHeroes),
    aliens: state => filterByName(state.filter.name, state.list.aliens),
    humans: state => filterByName(state.filter.name, state.list.humans),
    villains: state => filterByName(state.filter.name, state.list.villains),
    types: state => Object.keys(state.list)
  }
});

export default useHeroeStore;
