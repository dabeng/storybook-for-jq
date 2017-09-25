<template>
<button type="button" class="btn btn-default" data-toggle="tooltip" :data-placement="placement" :title="tips"  ><slot></slot></button>
</template>
<script>
export default {
  props: {
    placement: String,
    handleEvents: {
      default: () => () => null
    },
  },
  computed: {
    tips: function () {
      return 'Tooltip on ' + this.placement;
    }
  },
  mounted: function () {
    var vm = this
    $(this.$el)
      .tooltip()
      .on('show.bs.tooltip shown.bs.tooltip hide.bs.tooltip hidden.bs.tooltip', function (e) {
        vm.$emit(e.type.split('.')[0], vm.$el.textContent + ' button')
      })
  }
};
</script>