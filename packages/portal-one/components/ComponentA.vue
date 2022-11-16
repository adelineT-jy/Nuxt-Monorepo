<template>
  <div class="text-green-400 text-3xl">
    inserted component
  </div>
</template>
<script>
export default {
  name: 'ComponentA',
  props: {
    colour: { type: String, default: 'text-green-400' }
  }
}
</script>
<style scoped>
</style>
