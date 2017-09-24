import Vue from 'vue';

import jquery from 'jquery';
global.$ = jquery;
global.jQuery = jquery;
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

import { storiesOf } from '@storybook/vue';

import tooltipbtn from './tooltip-button.vue';

storiesOf('Tooltip', module)
  .add('story as a component', () => ({
    components: { tooltipbtn },
    template: `<div class="container">
      <tooltipbtn placement="left"></tooltipbtn>
      <tooltipbtn placement="top"></tooltipbtn>
      <tooltipbtn placement="bottom"></tooltipbtn>
      <tooltipbtn placement="right"></tooltipbtn>
    </div>`
  }));