import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SampleLogin from './sample/SampleLogin';
import HomeComponent from '../components/HomeComponent';
import HeaderComponent from '../components/HeaderComponent';
import PatientsSearchResultComponent from '../components/PatientsSearchResultComponent'
import DisplayPatientNameComponent from '../components/DisplayPatientNameComponent'
import ModalDisplayMessageComponent from '../components/ModalDisplayMessageComponent'
import '../App.css'

storiesOf('Header', module)
  .add('Header', () => (<HeaderComponent />));

storiesOf('Home', module)
  .add('Home Page', () => (<HomeComponent />));

storiesOf('Login', module)
  .add('Login Page', () => (<SampleLogin />));

storiesOf('Shared component', module)
  .add('Show data in table', () => (
    <PatientsSearchResultComponent dataObjTable={[{
      idPatient: "P000001",
      firstname: "Phatcharaphan",
      lastname: "Ananpreechakun"
    },{
      idPatient: "P000002",
      firstname: "Phatcharaphan2",
      lastname: "Ananpreechakun2"
    }]}/>
  ))
  .add('Display patient name and lastname',()=>(
    <DisplayPatientNameComponent namePatient={'Phatcharaphan Ananpreechakun'}/>
  ))
  .add('Modal display message when data display is success', ()=>(
    <ModalDisplayMessageComponent isShowmodal={true} titleModal="Fee" 
                         messageModal="Save Successfully"
                         nameBtnModal="OK"
                         isSuccess={true}/>
  ));
