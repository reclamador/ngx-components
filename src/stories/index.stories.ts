import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import {
  SpinnerComponent,
  SwitchComponent
} from '../../libs/reclamitux/src';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {}
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Go to Welcome Story',
      onClick: linkTo('Welcome')
    }
  }))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯'
      }
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG')
      }
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Reclamador Switch', module)
  .add(
    'default',
    () => ({
      component: SwitchComponent,
      props: {}
    }),
    { notes: 'Componente switch para acciones unitarias sin etiquetas' }
  )
  .add(
    'with color red',
    () => ({
      component: SwitchComponent,
      props: {
        color: 'red'
      }
    }),
    { notes: 'Componente switch para acciones unitarias sin etiquetas' }
  )
  .add(
    'with text',
    () => ({
      component: SwitchComponent,
      props: {
        defaultBgColor: 'lightgray',
        checkedLabel: 'ACTIVO',
        uncheckedLabel: 'INACTIVO'
      }
    }),
    { notes: 'Componente switch para acciones unitarias sin etiquetas' }
  )
  .add(
    'with interceptor',
    () => ({
      component: SwitchComponent,
      props: {
        interceptActionCallback: function() {
          const res = confirm('Wow wow wow');
          return res;
        }
      }
    }),
    { notes: 'Componente switch para acciones unitarias sin etiquetas' }
  );

storiesOf('Reclamador Spinner', module).add('basic', () => ({
  component: SpinnerComponent,
  props: {}
}));
