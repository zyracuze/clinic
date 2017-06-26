import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SampleLogin from './sample/SampleLogin';
import Home from '../components/Home';
import Header from '../components/Header';

import '../App.css'

storiesOf('Header', module)
  .add('Header', () => (<Header />));

storiesOf('Home', module)
  .add('Home Page', () => (<Home />));

storiesOf('Login', module)
  .add('Login Page', () => (<SampleLogin />));