import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SampleLogin from './sample/SampleLogin';
import Home from '../components/Home';
import Header from '../components/Header';
import SharedTable from '../components/elements/SharedTable'
import DisplayPatientName from '../components/elements/DisplayPatientName'

import '../App.css'

storiesOf('Header', module)
  .add('Header', () => (<Header />));

storiesOf('Home', module)
  .add('Home Page', () => (<Home />));

storiesOf('Login', module)
  .add('Login Page', () => (<SampleLogin />));

storiesOf('Shared Table Component', module)
  .add('Show data in table', () => (
    <SharedTable dataObjTable={[{
      idPatient: "P000001",
      firstname: "Phatcharaphan",
      lastname: "Ananpreechakun"
    },{
      idPatient: "P000002",
      firstname: "Phatcharaphan2",
      lastname: "Ananpreechakun2"
    }]}/>
  ));

  storiesOf('Display patient name and lastname', module)
    .add('',()=>(
      <DisplayPatientName namePatient={'Phatcharaphan Ananpreechakun'}/>
    ))