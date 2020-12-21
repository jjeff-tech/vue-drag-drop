<template>

  <div class="row m-0 align-items-stretch full-height">
    <div class="col flex-grow-1 shadow-sm border-right py-3">
      <div v-if="$store.state.building">
        Stuff for things doing stuff as: 
        <h2>{{ $store.state.building.buildingName }}</h2>
        <div v-html="$store.state.building.buildingOverview"></div>
      </div>
    </div>

    <div class="col col-8 bg-light pb-5">
      <div class="card mt-4 p-3">
        <div class="dropzone">
          <Container group-name="1" @drop="onDrop('contentBlocks', $event)" drag-handle-selector=".column-drag-handle">
            <ContentBlockEditor
              v-for="(block, index) in $store.state.contentBlocks" :key="block.id"
              v-model="$store.state.contentBlocks[index]"
              :index="index"
              @remove="handleRemove">
            </ContentBlockEditor> 
            <h3 class="text-center p-3 pb-4">Drag and drop content blocks</h3>
          </Container>
        </div>
      </div>
      <div class="pb-5"></div>
    </div>

    <div class="col col-2 shadow-sm border-left p-3">
      <Container group-name="1" behaviour="copy" :get-child-payload="getContentBlockTemplates">
        <Draggable v-for="ct in $store.state.contentBlockTemplates" :key="ct.id">
          <div class="card text-left p-3 mt-2 shadow-sm clickable">
            <p class="font-weight-bold m-0">{{ ct.name }}</p>
            <p class="m-0 small text-muted">{{ ct.description }}</p>
          </div>
        </Draggable>
      </Container>
    </div>

    <div class="border-top shadow-sm fixed bottom p-3 bg-white">
      <div class="text-center m-0">
        <button class="btn btn-outline-info m-0" @click="save()">Save Template</button>
      </div>
    </div>
  </div>

</template>
<script>

import { Container, Draggable, smoothDnD } from 'vue-smooth-dnd';
import ContentBlockEditor from '@/components/ContentBlockEditor'
import dragUtils from '../helpers/dragUtils';
import contentBlock from '../models/contentBlock';

export default {
  components: {
    Container,
    Draggable,
    ContentBlockEditor,
  },

  async mounted() {
    // await this.$store.dispatch('getBuilding');
    await this.$store.dispatch('getContentBlocks');
    await this.$store.dispatch('getContentBlockTemplates');
  },

  methods: {
    onDrop (collection, dropResult) {
      if(collection !== 'contentBlockTemplates') {
        if (dropResult.payload) {
          dropResult.payload = this.setNewBlock(dropResult.payload);
        }
        this.$store.state[collection] = dragUtils.applyDrag(this.$store.state[collection], dropResult);
      }
    },

    getContentBlockTemplates(index) {
      return this.$store.state.contentBlockTemplates[index]
    },

    setNewBlock(data) {
      const newBlock = this.getCopy(contentBlock);
      newBlock.contentBlockTemplateKey = data.templateKey;
      newBlock.id = `new_${(new Date().getTime())}`;
      newBlock.model = 'buildings';
      newBlock.value = data.contentEntryType === 'multiple' ? [data.jsonTemplate] : data.jsonTemplate;
      newBlock.contentBlockTemplate = data;
      return newBlock;
    },
    
    async handleRemove(index) {
      await this.$store.dispatch('removeContentBlock', index);
    },

    async save() {
      try {
        await this.$store.dispatch('saveContentBlocks');
        this.toast('Content Block Saved!');
      } catch (err) {
        this.toast('An error occurred!', 'error');
      }
    }
  },
}
</script>
