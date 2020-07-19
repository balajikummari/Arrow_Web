import React, { Component } from 'react';
import './customization.css'
import supermarketTemplate from '../../assets/foodtemplate.png'
import foodTemplate from '../../assets/foodtemplate.png'
import noImage from '../../assets/noimage.png'
import fashionTemplate from '../../assets/foodtemplate.png'
import AppTheme from '../../components/app-theme/app_theme';
import Heading from '../../components/customization-heading/heading';
import { getImageUrl } from '../../api/getImageUrl';
import { postAppDetails } from '../../api/postAppDetails';
import { Redirect } from 'react-router-dom';
import Loader from '../../components/loader/loader';
import { getAppData } from '../../api/getAppData';
import { wait } from '@testing-library/react';
interface IAppDetails {
    name: string,
    description: string,
    imagefile: any,
    themeValue: string,
    gmailId: string,
    filedata: any,
    isSuccessed: Boolean,
    isLoading: Boolean,
    json:any,
}
class CustomizationPage extends Component<{}, IAppDetails> {
    static theme = '';
    constructor(props = {}) {
        super(props)
        this.state = {
            name: '',
            description: '',
            imagefile: noImage,
            themeValue: '',
            gmailId: '',
            filedata: '',
            isSuccessed: false,
            isLoading: false,
            json:null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.CreateApp = this.CreateApp.bind(this);
        this.Data = this.Data.bind(this);
    }
    async CreateApp(event: React.FormEvent<EventTarget>) {
        event.preventDefault();
        this.setState({ isLoading: true })
        // const imageUrl = await getImageUrl(this.state.filedata);
        // console.log(imageUrl);
        // const offerJson: string = JSON.stringify({
        //     "businessName": this.state.name,
        //     "aboutBusiness": this.state.description,
        //     "logoUrl": imageUrl,
        //     "themeID": this.state.themeValue,
        //     "gmailID": this.state.gmailId,
        // }
        // );
        // const data = await postAppDetails(offerJson);
        // this.setState({json:data});
        // console.log(data);
        setTimeout(this.Data, 10000);  
    }
     async Data() {
         const jsonData=await getAppData("TechnovertStores5acc8");
         this.setState({json:jsonData});
        if (this.state.json !== null && this.state.json.buildStatus !== 0) {
            localStorage.setItem("appData", JSON.stringify({
                "id": this.state.json.id,
                "customerurl": this.state.json.customerAppUrl,
                "adminurl": this.state.json.adminAppUrl,
                "codeurl": this.state.json.codeZipUrl,
                "sheeturl": " https://docs.google.com/spreadsheets/d/" + this.state.json.gsheetID,
            }));
            this.setState({ isSuccessed: true });
        }
    }
    handleChange(event: any) {
        this.setState({ filedata: event.target.files[0] });
        this.setState({
            imagefile: URL.createObjectURL(event.target.files[0])
        });
    }
    handleUserInput(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        if (event.target.name === "imagefile") {
            this.handleChange(event);
        }
        this.setState({ ...this.state, ...{ [event.target.name]: event.target.value } });
    }
    render() {
        const redirectToReferrer = this.state.isSuccessed;
        if (redirectToReferrer === true) {
            return <Redirect to="/successpage" />
        }
        return (
            <form onSubmit={this.CreateApp} className="custom-form">
                {this.state.isLoading ? <Loader /> : null}
                <div className="page-header container">Registration</div>
                <div className="reg-form container">
                <div className="basic-details">
                    <input type="text" name="name" placeholder="Bussiness Name" required onChange={(event) => this.handleUserInput(event)} /><br />
                    <input type="email" name="gmailId" placeholder="Gmail ID (for sheets)" required onChange={(event) => this.handleUserInput(event)} /><br />
                    <div className="image-container">
                    <img src={this.state.imagefile} alt="" />
                    <label className="upload-image"> Upload Icon
                    <input type="file" name="imagefile" accept="image/png" onChange={this.handleChange}></input>
                    </label>
                    </div>
                    <br />
                    <br />
                    <textarea id="w3review" placeholder="Description" name="description" rows={10} cols={30} required onChange={(event) => this.handleUserInput(event)} />
                </div>
                <div className="choose-theme">
                    <div>Choose Theme</div>
                    <br />
                    <div className="app-theme-list">
                        <AppTheme image={supermarketTemplate} radiobuttonName="themeValue" radioButtonid="theme1" radioButtonValue="supermarket" labelName="Super Market" buttonText="preview" handleUserInput={(event) => this.handleUserInput(event)} />
                        <AppTheme image={fashionTemplate} radiobuttonName="themeValue" radioButtonid="theme2" radioButtonValue="fashionstore" labelName="Fashion Store" buttonText="preview" handleUserInput={(event) => this.handleUserInput(event)} />
                        <AppTheme image={foodTemplate} radiobuttonName="themeValue" radioButtonid="theme1" radioButtonValue="Super Market" labelName="Restaurant" buttonText="coomingsoon" handleUserInput={(event) => this.handleUserInput(event)} />
                        <AppTheme image={noImage} radiobuttonName="themeValue" radioButtonid="theme2" radioButtonValue="Fashion Store" labelName="Others" buttonText="coomingsoon" handleUserInput={(event) => this.handleUserInput(event)} />
                    </div>
                   
                </div>



                </div>
                <div className="container submit-box">
<input type="submit" value="Register" />
</div>
            </form>
        );
    }
}
export default CustomizationPage;