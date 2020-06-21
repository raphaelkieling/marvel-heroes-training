<template>
  <div class="heroe-section">
    <div class="text-red-600 font-bold text-2xl pl-4">
      {{ title }}
    </div>
    <div class="heroe-section-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.heroe-section-container {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
}
</style>
