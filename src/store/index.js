import Vue from 'vue'
import Vuex from 'vuex'
import { get, post, put } from '../api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contentBlockTemplates: [],
    contentBlocks: [],
    rentsyncMappings: [],
    groupAmenities: [],
    building: null,
  },
  mutations: {
    setContentBlockTemplates(state, payload) {
      state.contentBlockTemplates = payload;
    },
    setContentBlocks(state, payload) {
      state.contentBlocks = payload;
    },
    setBuilding(state, payload) {
      state.building = payload;
    },
    setRentsyncMappings(state, payload) {
      state.rentsyncMappings = payload;
    },
    setGroupAmenities(state, payload) {
      state.groupAmenities = payload;
    }
  },
  actions: {
    async getContentBlockTemplates({ commit }) {
      const result = {
          "data": [],
          "meta": {}
      };
      
      commit('setContentBlockTemplates', result.data);
    },

    async getBuilding({ commit }) {
      const result = await get('/buildings/170?select=id,buildingName,buildingOverview,clientId');
      commit('setBuilding', result.data);
      const mappings = await get(`/rentsync_mapping?clientId=${result.data.clientId}&group=user_generated`);
      commit('setRentsyncMappings', mappings.data);
    },

    async getContentBlocks({ commit }) {
      // const result = await get('/content_blocks?relations=contentBlockTemplate&status=enabled&orderBy=orderNumber');
      const result = {
        "data": [
            {
                "id": 657,
                "contentBlockTemplateKey": "heading",
                "rentsyncSettingId": 803,
                "model": "buildings",
                "value": {
                    "content": "{building.buildingName} For Rent!"
                },
                "orderNumber": 1,
                "status": "disabled",
                "created": "2020-02-25T19:08:36.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 659,
                "contentBlockTemplateKey": "building_description",
                "rentsyncSettingId": 803,
                "model": "buildings",
                "value": {
                    "content": "{building.buildingOverview}"
                },
                "orderNumber": 2,
                "status": "disabled",
                "created": "2020-02-25T19:20:45.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 660,
                "contentBlockTemplateKey": "text",
                "rentsyncSettingId": 803,
                "model": "",
                "value": {
                    "content": "Photos may not reflect actual unit available. Please contact ${client.name} at ${client.email}"
                },
                "orderNumber": 5,
                "status": "disabled",
                "created": "2020-02-25T19:23:20.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 661,
                "contentBlockTemplateKey": "heading",
                "rentsyncSettingId": 807,
                "model": "buildings",
                "value": {
                    "content": "{building.buildingName}"
                },
                "orderNumber": 1,
                "status": "enabled",
                "created": "2020-02-25T19:24:32.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 662,
                "contentBlockTemplateKey": "building_description",
                "rentsyncSettingId": 807,
                "model": "buildings",
                "value": {
                    "content": "{building.buildingOverview}"
                },
                "orderNumber": 2,
                "status": "enabled",
                "created": "2020-02-25T19:24:56.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T20:04:59.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 663,
                "contentBlockTemplateKey": "amenities",
                "rentsyncSettingId": 807,
                "model": "amenities",
                "value": {
                    "content": [
                        123,
                        456,
                        789
                    ]
                },
                "orderNumber": 3,
                "status": "enabled",
                "created": "2020-02-25T19:25:32.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 664,
                "contentBlockTemplateKey": "text",
                "rentsyncSettingId": 807,
                "model": "",
                "value": {
                    "content": "Photos may not reflect actual unit available."
                },
                "orderNumber": 4,
                "status": "enabled",
                "created": "2020-02-25T19:26:44.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 665,
                "contentBlockTemplateKey": "tr_building_description",
                "rentsyncSettingId": 807,
                "model": "buildings",
                "value": {
                    "content": "#TRANSLATE@fr:buildings.building_overview#",
                    "condition": [
                        {
                            "data": "building.city.province.provinceCode",
                            "value": "QC",
                            "compare": "=="
                        }
                    ]
                },
                "orderNumber": 2,
                "status": "enabled",
                "created": "2020-02-25T19:24:56.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T20:01:04.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 666,
                "contentBlockTemplateKey": "tr_amenities",
                "rentsyncSettingId": 807,
                "model": "amenities",
                "value": {
                    "content": [
                        123,
                        456,
                        789
                    ],
                    "condition": [
                        {
                            "data": "building.city.province.provinceCode",
                            "value": "QC",
                            "compare": "=="
                        }
                    ]
                },
                "orderNumber": 3,
                "status": "enabled",
                "created": "2020-02-25T19:25:32.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T20:01:04.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 667,
                "contentBlockTemplateKey": "suite_description",
                "rentsyncSettingId": 807,
                "model": "buildings",
                "value": {
                    "content": "{suite.description}"
                },
                "orderNumber": 2,
                "status": "enabled",
                "created": "2020-02-25T19:24:56.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 670,
                "contentBlockTemplateKey": "promotions",
                "rentsyncSettingId": 807,
                "model": "promotions",
                "value": {
                    "content": "Fallback Value ( If no promotions, this should be displayed. )",
                    "options": "{hideTitle: false, hideDetails: false}",
                    "condition": ""
                },
                "orderNumber": 2,
                "status": "enabled",
                "created": "2020-02-25T19:24:56.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 671,
                "contentBlockTemplateKey": "custom_fields",
                "rentsyncSettingId": 807,
                "model": "custom_fields",
                "value": {
                    "content": "{key: 'kijijij_ad_description', tableName: 'buildings'}",
                    "condition": ""
                },
                "orderNumber": 2,
                "status": "enabled",
                "created": "2020-02-25T19:24:56.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 672,
                "contentBlockTemplateKey": "promotions",
                "rentsyncSettingId": 803,
                "model": "promotions",
                "value": {
                    "content": "Fallback Value ( If no promotions, this should be displayed. )",
                    "options": "{hideTitle: false, hideDetails: false}",
                    "condition": ""
                },
                "orderNumber": 4,
                "status": "disabled",
                "created": "2020-02-25T19:24:56.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            },
            {
                "id": 673,
                "contentBlockTemplateKey": "custom_fields",
                "rentsyncSettingId": 803,
                "model": "custom_fields",
                "value": {
                    "content": "{key: 'kijijij_ad_description', tableName: 'buildings'}",
                    "condition": ""
                },
                "orderNumber": 3,
                "status": "disabled",
                "created": "2020-02-25T19:24:56.000Z",
                "createdUserId": 2280,
                "modified": "2020-10-29T19:38:30.000Z",
                "modifiedUserId": 2280
            }
        ],
        "meta": {
            "links": {
                "self": "http://localhost:7005/api/v1/content-blocks?page=1&limit=25",
                "prev": null,
                "next": null,
                "last": "http://localhost:7005/api/v1/content-blocks?page=1&limit=25",
                "first": "http://localhost:7005/api/v1/content-blocks?page=1&limit=25"
            },
            "totalRecords": 14,
            "totalPages": 1,
            "recordsPerPage": 25,
            "currentPage": 1
        }
    };
      commit('setContentBlocks', result.data);
    },

    async getGroupSettingValues({ commit }, group) {
      const ids = group.value.replace(/[|]/g, '');
      const result = await get(`/${group.model}?id~in=${ids}`);
      return result.data;  
    },

    async saveContentBlocks({ commit, state }) {
      let orderNumber = 1;
      for(const block of state.contentBlocks) {
        block.orderNumber = orderNumber;
        orderNumber = orderNumber + 1;
        if(block.id.toString().includes('new_')) {
          delete block.id;
        }
      }
      const result = await post('/content_blocks', state.contentBlocks);
      commit('setContentBlocks', result.data);
    },

    async removeContentBlock({ commit, state }, index) {
      const data = state.contentBlocks[index];
      if(!data.id.toString().includes('new_')) {
        data.status = 'disabled';
        await put(`/content_blocks/${data.id}`, data);
      }
      state.contentBlocks.splice(index, 1);
    },
  },
})
