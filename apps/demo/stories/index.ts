import { MyButtonComponent } from './../../../libs/two-lib/src/my-button/my-button.component';
import { storiesOf } from '@storybook/angular';
// import { action } from '@storybook/addon-actions';


storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: MyButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));
