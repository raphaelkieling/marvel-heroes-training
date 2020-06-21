<template>
  <div class="home">
    <app-header />

    <div class="content pl-4">
      <div>
        <h4 class="text-gray-500 text-lg font-semibold">Bem vindo ao Marvel Heroes</h4>
        <h1 class="text-gray-900 text-3xl font-heavy leading-none">Escolha o seu personagem</h1>
      </div>

      <div class="pt-5">
        <heroe-category-container>
          <heroe-category-container-item icon="hero" color="blue" />
          <heroe-category-container-item icon="villain" color="red" />
          <heroe-category-container-item icon="antihero" color="purple" />
          <heroe-category-container-item icon="alien" color="green" />
          <heroe-category-container-item icon="human" color="pink" />
        </heroe-category-container>
      </div>
    </div>

    <div class="content">
      <the-heroe-search class="p-2" />

      <heroe-section-container v-for="type in heroeStore.types" :key="type" :title="type">
        <heroe-section-container-item
          v-for="heroe in heroeStore[type]"
          :key="heroe.name"
          :bg="getImageUrl(heroe.imagePath)"
        />
      </heroe-section-container>
    </div>
  </div>
</template>

<script lang="ts">
import useHeroeStore from "@/store/heroeStore";
import AppHeader from "@/components/Header";
import HeroeCategoryContainer from "@/components/HeroeCategory/HeroeCategoryContainer";
import HeroeCategoryContainerItem from "@/components/HeroeCategory/HeroeCategoryContainerItem";
import HeroeSectionContainer from "@/components/HeroeSection/HeroeSectionContainer";
import HeroeSectionContainerItem from "@/components/HeroeSection/HeroeSectionContainerItem";
import TheHeroeSearch from "@/components/TheHeroeSearch";

export default {
  components: {
    AppHeader,
    HeroeCategoryContainer,
    HeroeCategoryContainerItem,
    HeroeSectionContainer,
    HeroeSectionContainerItem,
    TheHeroeSearch
  },
  setup() {
    const heroeStore = useHeroeStore();

    const getImageUrl = (data: string): string => require(`@/data/${data}`);

    return { heroeStore, getImageUrl };
  }
};
</script>
