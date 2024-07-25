import React from "react";

class Eight extends React.Component {
    name="ReactJS";
    count=0;
    constructor(){
        super();
        this.state={
            number:1
        }
        console.log("Constructor is called!");
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number+1);
    }
    componentDidUpdate(){
        console.log("Incremented");
    }
    componentWillUnmount(){
        console.log("Will be UnMounted");
    }
    funName=()=>{}
    funEightBtnClick=()=>{
        console.log("Button Clicked!");
        console.log(this.count+1);

        this.setState({number:this.state.number+1});
    }
    render(){
        return(
            <div>
                <h1>This is Class Component{this.name} {this.count}{this.statenymber}</h1>
                <button class="btn btn-primary"
                onClick={this.funEightBtnClick}>Click here</button>
            </div>
        );
    }
}
export default Eight;