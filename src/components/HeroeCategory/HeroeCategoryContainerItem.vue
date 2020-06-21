<template>
  <div class="category-item flex justify-center items-center" :class="getColorClass(color)">
    <img :src="getIconUrl(icon)" />
  </div>
</template>

<script lang="ts">
export default {
  props: ["icon", "color"],
  setup() {
    const getIconUrl = (icon: string) => require(`@/assets/icons/${icon}.svg`);
    const getColorClass = (color: string) => `category-color-${color}`;
    return { getIconUrl, getColorClass };
  }
};
</script>

<style scoped>
.category-item {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}

.category-item > img {
  width: 36px;
}

.category-color-blue {
  background: linear-gradient(180deg, #005bea 0%, #00c6fb 100%);
}

.category-color-red {
  background: linear-gradient(180deg, #ed1d24 0%, #ed1f69 100%);
}

.category-color-green {
  background: linear-gradient(180deg, #0ba360 0%, #3cba92 100%);
}

.category-color-purple {
  background: linear-gradient(180deg, #b224ef 0%, #7579ff 100%);
}

.category-color-pink {
  background: linear-gradient(180deg, #ff7eb3 0%, #ff758c 100%);
}
</style>
