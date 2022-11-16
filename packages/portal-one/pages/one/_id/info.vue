<template>
  <div>
    <center>
      <h2 class="mt-4">
        Welcome to Portal-one
      </h2>
      <h2 class="mt-4">
        Happiness come from page within a page with _number routing
      </h2>
      <h3 class="mt-6">
        {{ id }}
      </h3>
    </center>
  </div>
</template>

<script>
export default {
  name: 'PageWithinPage',
  asyncData ({ params }) {
    const id = params.id
    return {
      id
    }
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped>
</style>
