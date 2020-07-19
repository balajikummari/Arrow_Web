import './app_theme.css'
import React, { Component } from 'react';
interface IAppTheme {
    image: any,
    buttonText: string,
    radiobuttonName: string,
    radioButtonid: string,
    labelName: string,
    radioButtonValue: any,
    handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}
class AppTheme extends Component<IAppTheme> {
    constructor(props: IAppTheme) {
        super(props);
        this.state = {
        };
    }
    render() {
        return <div className="apptheme">
            {/* <p>{this.props.buttonText}</p> */}
            <img src={this.props.image} alt="" />
            <div className="radio-box">
            <input type="radio" id={this.props.radioButtonid} name={this.props.radiobuttonName} value={this.props.radioButtonValue} required onChange={this.props.handleUserInput} />
            <label>{this.props.labelName}</label>
            </div>
        </div>
    }
}
export default AppTheme;