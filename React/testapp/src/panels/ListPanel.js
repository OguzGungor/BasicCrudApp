import React from "react";
import { list, update, _delete } from "../util/endpoints";


class ListPanel extends React.Component{

    state = {
        msg : "NaN",
        entities: []
    }

    componentDidMount(){

        list().then((res)=>{this.setState({entities:res});console.log(res)});
    }

    update = (id) =>{
        this.props.handleUpdate(id);
    }

    delete = (id) =>{
        _delete(id).then(()=>{
            list().then((res)=>{{this.setState({entities:res});console.log(res)}});
        });
    }


    render(){

        return( 
            <table >
                <tr>
                <th>Id</th>
                <th>Name</th>
                </tr>
                {this.state.entities.map((entity)=>{
                    return(<tr>
                        <td>{entity.id}</td>
                        <td>{entity.name}</td>
                        <td><button onClick={this.update.bind(this,entity.id)}>update</button></td>
                        <td><button onClick={this.delete.bind(this,entity.id)}>delete</button></td>
                    </tr>)
                })}
            </table>
         )
    }
}

export default ListPanel;