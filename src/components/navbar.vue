<template>
  <div>
    <externo />
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand center" href="#">Brincando com Vue</a>
    </nav>
  </div>
</template>

<script>
import externo from "./link";
export default {
  name: "navbar",
  components: {
    externo,
  },
};
</script>