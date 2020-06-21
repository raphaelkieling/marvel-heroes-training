<template>
  <div class="heroe-item" :style="{ 'background-image': `url(${bg})` }"></div>
</template>

<script>
export default {
  props: ["bg"]
};
</script>

<style>
.heroe-item {
  height: 230px;
  width: 140px;
  background-position: center;
  background-size: cover;
  flex: 0 0 auto;
  border-radius: 10px;
  margin-left: 16px;
}
</style>
