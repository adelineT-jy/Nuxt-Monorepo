<template>
  <div>
    <center>
      <h1 class="mt-4">
        HELLO FRIEND
      </h1>
      <h2 class="mt-4">
        Portal-One
      </h2>
      <h2 class="mt-4">
        Let us expand this page with components from the same package
      </h2>
      <ComponentA />
      <h2>TRY</h2>
    </center>
  </div>
</template>

<script>
import ComponentA from 'portal-one/components/ComponentA.vue'
export default {
  name: 'Second',
  components: {
    ComponentA
  },
  mounted () {},
  methods: {}
}
</script>
