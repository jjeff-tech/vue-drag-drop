<template>
<div>

<div class="form-group">
  <label class="small">List Title (Optional)</label>
  <input type="text" class="form-control" v-model="block.title">
</div>
<div class="card bg-light p-3">

  <Container @drop="onListDrop" drag-handle-selector=".column-drag-handle">
    <Draggable v-for="(val, idx) in block.value" :key="idx">
      <div class="list-entry card bg-white m-2 p-3">
        <div class="row align-items-center">
          <div class="flex-grow-0 text-center column-drag-handle clickable">
            <span class="p-3">&#x2630;</span>
          </div>
          <div class="col flex-grow-1 pl-0">
            <div class="form-group mt-2">
              <input type="text" class="form-control input-sm" placeholder="Subtitle (Optional)" v-model="val.content.subtitle">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Content" v-model="val.content.text">
            </div>
          </div>
          <div class="col flex-grow-0">
            <button class="btn btn-sm btn-danger" @click="block.value.splice(idx, 1)">Remove</button>
          </div>
        </div>
      </div>
    </Draggable>
  </Container>

  <div class="text-center">
    <button class="btn btn-sm btn-primary" @click="block.value.push(getCopy(template.jsonTemplate))">
      Add List Item
    </button>
  </div>

</div>

</div>

</template>
<script>

import { Draggable, Container, smoothDnD } from 'vue-smooth-dnd';
import dragUtils from '../helpers/dragUtils';

export default {
  components: {
    Draggable,
    Container,
  },

  props: ['value', 'template'],

  data() {
    return {
      block: this.getCopy(this.value),
    }
  },

  watch: {
    block: {
      deep: true,
      handler() {
        this.$emit('input', this.block);
      },
    },
  },

  methods: {
    onListDrop (dropResult) {
      this.block.value = dragUtils.applyDrag(this.block.value, dropResult);
    },
  },
}
</script>
<style scoped>

</style>