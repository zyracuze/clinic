import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    let style = {'maxWidth':'18%'};
    return(
        <img style={style} src="clinic.png"/>
    )
  }
}
