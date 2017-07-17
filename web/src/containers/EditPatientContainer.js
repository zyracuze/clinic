import React, { Component } from 'react'
import { apiValidateSearch, apiUpdatePatient } from '../apis/ApiPatient'
import PatientFormComponent from '../components/patient/PatientFormComponent'
import { Button } from 'react-bootstrap';
class EditPatientContainer extends Component {

  constructor(props) {
    super(props);
    this.updatePatienSubmit = this.updatePatienSubmit.bind(this);
  }
  state = {
    patients: {}
  }
  componentDidMount() {
    apiValidateSearch(this.setPatient()).then(
      (responseSuccess)=>{
        this.setState({patients: responseSuccess[0]});
      },(responseFail) => {}
    );
  }
  
  setPatient() {
    return {
        "idPatient": this.props.params.id
    }
  }

  updatePatienSubmit(patients) {
      let requestObj = {
        firstname: patients.firstname,
        lastname: patients.lastname,
        nickname: patients.nickname,
        gender: patients.gender,
        birthday: patients.birthday,
        idCard: patients.idCard,
        career: patients.career,
        tel: patients.tel,
        workAddress: patients.workAddress,
        homeAddress: patients.homeAddress,
        requiredDocument: patients.requiredDocument,
        congenitalDisease: patients.congenitalDisease,
        beAllergic: patients.beAllergic,
        emergencyContact: {
          name: patients.emergencyContactName,
          relationship: patients.emergencyContactRelationship,
          tel: patients.emergencyContactTel
        }
      };

       apiUpdatePatient(requestObj).then(() => {
        console.log("Edit Success :::: ");
      }, () => {
        console.log("Edit Fail :::: ");
      });
  }

  render() {
    return (
      <div>
        <PatientFormComponent patients={this.state.patients}/>
        <Button
           onClick={()=> this.updatePatienSubmit(this.state.patients)}
           bsStyle="primary"
           type="submit"
           className="btn btn-lg btn-primary">แก้ไข</Button>
      </div>
    )
  }

}
export default EditPatientContainer;
