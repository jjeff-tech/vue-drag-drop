<template>

  <Draggable>

    <div class="card mb-3 p-3" v-if="editBlock">
      <div class="row align-items-center">

        <div class="flex-grow-0 column-drag-handle clickable">
          <span class="p-3">&#x2630;</span>
        </div>
  
        <div class="col pl-0 flex-grow-1">
          <strong>{{ template.name }}</strong>
        </div>

        <div class="col flex-grow-0">
          <button class="btn btn-sm btn-danger" @click="$emit('remove', index)">Remove</button>
        </div>

        <div class="content-editor col-12 mt-3">

          <textarea
            v-if="template.templateKey === 'text_area'"
            class="form-control" 
            rows="6" 
            :placeholder="template.description" 
            v-model="editBlock.value.content">
          </textarea>

          <ContentBlockAmenities 
            v-else-if="template.templateKey === 'amenities'"
            v-model="editBlock"
            :template="template">
          </ContentBlockAmenities>

          <ContentBlockList
            v-else-if="template.templateKey === 'list'"
            v-model="editBlock"
            :template="template">
          </ContentBlockList>

          <input v-else-if="['heading','text'].find(v => v === template.templateKey)"
            type="text"
            class="form-control"
            :placeholder="template.description"
            v-model="editBlock.value.content">
          
        </div>

      </div>
    </div>

  </Draggable>

</template>
<script>

import { Draggable, Container, smoothDnD } from 'vue-smooth-dnd';
import ContentBlockList from '@/components/ContentBlockList';
import ContentBlockAmenities from '@/components/ContentBlockAmenities';
import dragUtils from '../helpers/dragUtils';

export default {
  components: {
    Draggable,
    Container,
    ContentBlockList,
    ContentBlockAmenities,
  },

  props: ['index', 'value'],

  data() {
    return { 
      template: this.value.contentBlockTemplate,
      editBlock: this.getCopy(this.value),
    }
  },

  watch: {
    editBlock: {
      deep: true,
      handler() {
        this.$emit('input', this.editBlock);
      },
    },
  },

  methods: {
    onListDrop (dropResult) {
      this.editBlock.value = dragUtils.applyDrag(this.editBlock.value, dropResult);
    },
  },
}
</script>
<style scoped>

</style>