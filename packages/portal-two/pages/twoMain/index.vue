<template>
  <div>
    <center>
      <h1 class="mt-4">Portal-two</h1>
      <h2 class="mt-4">portal-two main page</h2>
      <h3 class="mt-4">Let us produce the same component from portal-one</h3>
      <ComponentB />
    </center>
  </div>
</template>

<script>
import ComponentB from "portal-one/components/ComponentA.vue";

export default {
  name: "TwoMain",
  components: {
    ComponentB,
  },
};
</script>

