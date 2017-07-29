import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import HomeComponent from '../components/HomeComponent';
import HeaderComponent from '../components/HeaderComponent';
import PatientsSearchResultComponent from '../components/PatientsSearchResultComponent'
import DisplayPatientNameComponent from '../components/DisplayPatientNameComponent'
import ModalDisplayMessageComponent from '../components/ModalDisplayMessageComponent'
import SearchReportComponent from '../components/report/SearchReportComponent'
import MedicalExpenseReportComponent from '../components/report/MedicalExpenseReportComponent'
import '../App.css'
import '../index.css';

storiesOf('Header', module)
  .add('Header', () => (<HeaderComponent />));

storiesOf('Home', module)
  .add('Home Page', () => (<HomeComponent />));

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

storiesOf('Fee Page', module)
  .add('Search report', () => (<SearchReportComponent />))
  .add('display data when search report', ()=>(<MedicalExpenseReportComponent dataTable={[
     {
      "idPatient": "P000014",
      "firstname": "Phatcharaphan",
      "lastname": "Ananpreechakun",
      "fees": [
          {
              "expenseItem": "ค่าตรวจหมอ",
              "amount": 200
          },
          {
              "expenseItem": "ค่ายาแก้ปวด",
              "amount": 350
          }
      ],
      "sumFeeItem": 550,
      "createDateTime": "2017-07-27 16:09:02"
    },
    {
      "idPatient": "P000014",
      "firstname": "Phatcharaphan",
      "lastname": "Ananpreechakun",
      "fees": [
          {
              "expenseItem": "ค่าตรวจหมอ",
              "amount": 200
          },
          {
              "expenseItem": "ค่ายาแก้ปวด",
              "amount": 350
          }
      ],
      "sumFeeItem": 550,
      "createDateTime": "2017-07-27 16:09:03"
    },
    {
      "idPatient": "P000014",
      "firstname": "Phatcharaphan",
      "lastname": "Ananpreechakun",
      "fees": [
          {
              "expenseItem": "ค่าตรวจหมอ",
              "amount": 200
          },
          {
              "expenseItem": "ค่ายาแก้ปวด",
              "amount": 350
          }
      ],
      "sumFeeItem": 550,
      "createDateTime": "2017-07-22 15:42:07"
    }
  ]} sumFee={1650}/>));
