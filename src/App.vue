<template>
  <div>
    <navbar />
    <grid />
  </div>
</template>

<script>
import navbar from "./components/navbar";
import grid from "./components/grid";

export default {
  name: "App",
  components: {
    navbar,
    grid,
  },
};
</script>

<style>
</style>
