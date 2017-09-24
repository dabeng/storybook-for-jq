<template>
<button type="button" class="btn btn-default" data-toggle="tooltip" :data-placement="placement" title="Tooltip on right">Tooltip on {{placement}}</button>
</template>
<script>
export default {
  props: ['placement'],
  mounted: function () {
    var vm = this
    $(this.$el)
      .tooltip()
  },
};
</script>