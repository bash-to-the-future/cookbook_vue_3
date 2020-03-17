<template>
  <button 
    @click="setSortAttribute(message)" 
    class="btn btn-info"
  >{{ message }}</button>
</template>

<style></style>

<script>
export default {
  name: 'my-button',
  props: [
    "message"
  ],
  methods: {
    setSortAttribute: function(inputAttribute) {
      this.$emit('signal', inputAttribute);
    }
  }
}
</script>