import React from "react";
import CreatePanel from "../panels/CreatePanel";
import UpdatePanel from "../panels/UpdatePanel";
import ListPanel from "../panels/ListPanel";



class MainPage extends React.Component{

    state={
        panel:<ListPanel handleUpdate ={this.updateEntity} />
    }

    componentDidMount(){

    }

    updateEntity = (id) =>{
        this.setState({panel:<UpdatePanel entityId ={id} handleUpdateComplete = {this.redirectList}/>});
    }

    redirectList = () =>{
        this.setState({panel:<ListPanel handleUpdate ={this.updateEntity}/>});
    }


    render(){
        return (<><div class="tab">
        <button class="tablinks" onClick={()=>{this.setState({panel:<CreatePanel/>})}}>Create</button>
        <button class="tablinks" onClick={()=>{this.setState({panel:<ListPanel handleUpdate ={this.updateEntity} />})}}>List All</button>
      </div>
      <div class="mainPanel">{this.state.panel}</div></>);
    }

}

export default MainPage;