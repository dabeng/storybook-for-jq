import { configure } from '@storybook/vue';

// import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
// import Mybutton from '../src/stories/tooltip.vue';

// Install Vue plugins.
// Vue.use(Vuex);

// Register custom components.
// Vue.component('child', Mybutton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);