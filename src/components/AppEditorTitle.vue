<template>
  <h1 class="app-form-header">
    {{title}}<slot></slot>
  </h1>
</template>

<script>
/**
 * 编辑页标题显示
 * @author hjz
 * @version 2017-06-07
 */
export default {
  name: 'app-edit-title',

  computed: {
    title() {
      const breadcrumb = this.$route.meta.breadcrumb
      const last = breadcrumb.length - 1
      return breadcrumb[last].name
    },
  },
}
</script>

<style>

</style>
