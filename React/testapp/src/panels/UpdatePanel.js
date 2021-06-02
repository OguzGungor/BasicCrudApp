import React from "react";
import { read, update } from "../util/endpoints";


class UpdatePanel extends React.Component{

    state = {
        msg : "NaN",
        id:null,
        name : ""
    }

    componentDidMount(){

        read(this.props.entityId).then((response)=>{this.setState({id:this.props.entityId,name:response.name});})        
    }

    inputChange = ()=>{
        
        this.setState({id:this.state.id,name:document.getElementById("update_name").value});
    }

    submit = () =>{
        
        update(this.state.id,this.state.name).then(()=>{this.props.handleUpdateComplete();});
    }

    render(){
        return (<>
            <label>Name</label><br/>
            <input id="update_name" onChange={this.inputChange.bind(this)} defaultValue={this.state.name}/><br/>
            <button onClick={this.submit.bind(this)}>update</button><br/>
            {(this.state.msg === "NaN")?(null):(this.state.msg + " is created")}
            </>)
        return (this.props.entityId);
    }
}

export default UpdatePanel;