import React, { Component } from 'react';
import heartIcon from '../../assets/heart.png';
import './success.css';
interface ISuccessState {
    storeId: string,
    customerAppLink: string,
    adminAppLink: string,
    productSheetLink: string,
    codeLink: string,
}
class SuccessPage extends Component<{}, ISuccessState> {
    constructor(props = {}) {
        super(props)
        this.state = {
            storeId: 'Value',
            customerAppLink: "Value",
            adminAppLink: "Value",
            productSheetLink: "Value",
            codeLink: "Value"
        }
    }
    async componentDidMount() {
        const data = JSON.parse(localStorage.getItem('appData')!)
        if (data != null) {
            this.setState({
                storeId: data.id ?? "value",
                customerAppLink: data.customerurl ?? "value",
                adminAppLink: data.adminurl?? "value" ,
                codeLink: data.codeurl ?? "value",
                productSheetLink: data.sheeturl ?? "value",
            })
        }
    }
    render() {
        return (
            <div className="success-div">
                {/* <img src={heartIcon} alt="Cinque Terre" width="100" height="100"></img> */}
                <h2>Registration Successful</h2>
                <h3>Your app is ready</h3>
                <div className="success-heading">
                    <h4>Your StoreID : </h4>
                    <h4>Customer App Link : </h4>
                    <h4>Store Admin App Link : </h4>
                    <h4>Product Sheet Link : </h4>
                    <h4>Download Code : </h4>
                </div >
                <div className="success-values">
                    <p>{this.state.storeId} </p>
                    <a href={this.state.customerAppLink}>{this.state.customerAppLink}</a>
                    <a href={this.state.adminAppLink}>{this.state.adminAppLink}</a>
                    <a href={this.state.productSheetLink}>{this.state.productSheetLink}</a>
                    <a href={this.state.codeLink}>{this.state.codeLink}</a>
                </div>
                <div className="publish">
                    <p>Coming Soon</p>
                    <span className="button pinkbutton">Publish to AppStore</span>
                </div>
            </div>
        );
    }
}
export default SuccessPage;