<template>

<div class="row align-items-center">

  <div class="col-6">
    <label class="small">Amenities List Title (Optional)</label>
    <input type="text" class="form-control" v-model="block.title">
  </div>
  <div class="col-6">
    <label class="small">Amenity Group</label>
    <select class="form-control" v-model="selectedGroup">
      <option v-for="m in $store.state.rentsyncMappings" :key="m.id" :value="m">
        {{ m.name }}
      </option>
    </select>
  </div>

</div>

</template>
<script>

export default {
  props: ['value', 'template'],

  data() {
    return {
      block: this.getCopy(this.value),
      selectedGroup: null,
      groupAmenities: [],
    }
  },

  mounted() {
    this.setSelectedGroup();
  },

  watch: {
    block: {
      deep: true,
      handler() {
        this.$emit('input', this.block);
      },
    },
    selectedGroup: function() {
      this.onSelectGroupChange();
    },
    '$store.state.rentsyncMappings': function() {
      this.setSelectedGroup();
    }
  },

  methods: {
    async setSelectedGroup() {
      if (this.$store.state.rentsyncMappings.length > 0) {
        this.selectedGroup = this.$store.state.rentsyncMappings.find(
          (val) => val.id.toString() === this.block.value.content.toString()
        ) || this.$store.state.rentsyncMappings[0];
      }
    },

    async onSelectGroupChange() {
      this.block.value.content = this.selectedGroup.id;
    }
  },
}
</script>
<style scoped>

</style>