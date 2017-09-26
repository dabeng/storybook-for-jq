import Vue from 'vue';

import jquery from 'jquery';
global.$ = jquery;
global.jQuery = jquery;
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import TooltipBtn from './tooltip-button.vue';
import { withKnobs, text, number, boolean, array, select, color, date } from '@storybook/addon-knobs';

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .add('tooltip for button', () => {
    const caption = text('Caption', 'OK');
    const placements = {
      left: 'left',
      top: 'top',
      right: 'right',
      bottom: 'bottom'
    };
    const placement = select('Placement', placements, 'top');
    const types = {
      'btn-default': 'Default',
      'btn-primary': 'Primary',
      'btn-success': 'Success',
      'btn-info': 'Info',
      'btn-warning': 'Warning',
      'btn-danger': 'Danger'
    };
    const type = select('Type', types, 'btn-default');

    return {
    components: { TooltipBtn },
    template: `
      <div class="container">
        <tooltip-btn class="${type}" placement="${placement}" @show="logShow" @shown="logShown" @hide="logHide" @hidden="logHidden">${caption}</tooltip-btn>
      </div>`,
    methods: { 
      logShow: action('show.bs.tooltip'),
      logShown: action('shown.bs.tooltip'),
      logHide: action('hide.bs.tooltip'),
      logHidden: action('hidden.bs.tooltip')
    }
  };
  });