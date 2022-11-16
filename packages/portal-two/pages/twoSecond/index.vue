<template>
  <div>
    <center>
      <h1 class="mt-4">Portal-two </h1>
      <h2 class="mt-4">Intialising Portal Dimension 2 Page 2</h2>
      <h2>Believing that it can run</h2>
      <ComponentB />
    </center>
  </div>
</template>
<script>
import ComponentB from "portal-one/components/ComponentA.vue";

export default {
  name: "TwoSecond",
  components: {
    ComponentB,
  },
};
</script>