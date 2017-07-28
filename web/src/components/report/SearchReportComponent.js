import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class SearchReportComponent extends Component{
    static propType = {
        onSubmitSearch: PropTypes.func.isRequired
    }
    render(){
        return(
             <div> 
                <form onSubmit = { this.props.onSubmitSearch }>
                <h2 className="form-signin-heading">รายงานค่ารักษา</h2>
                    <input
                    type="text"
                    className="form-control-signin"
                    placeholder="ชื่อ"
                    name="firstname"/>
                    <input
                    type="text"
                    className="form-control-signin"
                    placeholder="นามสกุล"
                    name="lastname"/>
                    <input
                    type="text"
                    className="form-control-signin"
                    placeholder="รหัสผู้ป่วย"
                    name="identifySearch"/>
                    <select name="period" className="form-control-option">
                        <option value="1">Daily</option>
                        <option value="7">Weekly</option>
                    </select>
               
                <button
                    type="submit"
                    className="btn btn-lg btn-primary">SEARCH</button>
                </form>
            </div>
        )
    }
}