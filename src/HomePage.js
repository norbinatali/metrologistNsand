import React,{Component} from "react" ;
import Navbar, { ElementsWrapper } from './menu/navbar';
import Registration from "./Authorization/Registration";
import {Form} from "antd";

class HomePage extends Component{
    constructor(props) {
        super(props);
        const {cookies} = props;
    }
    render(){
        const navbarItems = [{
            label: "Welcome",
            target: "item-1"
        }, {
            label: "Products",
            target: "item-2"
        }, {
            label: "About",
            target: "item-3"
        }, {
            label: "Contacts",
            target: "item-4"
        }, {
            label: "Login",
            target: "item-5"
        }, {
            label: "Costumers",
            target: "item-6"
        }, ];
        const containerStyle = {
            width: "100%",
            margin: "100px 0 100px"
        };
        const AntWrappedSignUpForm = Form.create()(Registration);
    return(
        <div>
            <Navbar items={navbarItems} offset={-80} duration={500} delay={0}></Navbar>
            <div style={containerStyle}>
                <ElementsWrapper items={navbarItems}>
                    <div name="item-1" style={{ width: 100, height: 800}} >1</div>
                    <div name="item-2" style={{ width: 100, height: 800}} >item 2</div>
                    <div name="item-3" style={{ width: 100, height: 800}} >item 3</div>
                    <div name="item-4" style={{ width: 100, height: 800}}>item 4</div>
                    <div name="item-5" style={{ width: 100, height: 800}} >
                        <AntWrappedSignUpForm onSignUp={this.props.registration}/></div>
                    <div name="item-6" style={{ width: 100, height: 800}}>item 6</div>


                </ElementsWrapper>


            </div>
        </div>

);
    }


}
export default (HomePage);