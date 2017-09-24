<template>
<button type="button" class="btn btn-default" data-toggle="tooltip" :data-placement="placement" :title="tips">{{placement}}</button>
</template>
<script>
export default {
  props: ['placement'],
  computed: {
    tips: function () {
      return 'Tooltip on ' + this.placement;
    }
  },
  mounted: function () {
    var vm = this
    $(this.$el)
      .tooltip()
  },
};
</script>