<template>
  <div class="panel-page page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2>{{ title }}</h2>
        </div>
      </div>
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelPage",
  props: ['title']
}
</script>

<style lang="scss" scoped>
div.panel-page{
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;

  h2{
    color: var(--dark-contrast-1)
  }
}
</style>