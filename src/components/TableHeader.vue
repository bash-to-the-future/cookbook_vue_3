<template>
  <th @click="setSortAttribute(heading)" scope="col">
    {{ heading }}
    <span v-if="sortAttribute === heading && sortAscending === 1"><font-awesome-icon icon="arrow-down" /></span>
    <span v-if="sortAttribute === heading && sortAscending === -1"><font-awesome-icon icon="arrow-up" /></span>

  </th>
</template>

<style>
</style>

<script>
export default {
  name: "table-header",
  props: [
    "heading",
    "sortAttribute",
    "sortAscending"
  ],
  methods: {
    setSortAttribute: function(inputAttribute) {
      this.$emit('setSortAttribute', inputAttribute);
    }
  }
}
</script>