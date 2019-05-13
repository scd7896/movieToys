import React,{component} from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Component } from 'react';
import Button from '@material-ui/core/Button'
class HostList extends Component{
    constructor(props){
        super(props);
    }
    returnHost = () =>{
        this.props.onCreate(this.props);
        console.log(this.props);
    }
    render(){
        return(
            <TableRow onClick ={this.returnHost} id = {this.props.key}>
                <TableCell>{this.props.hostname}</TableCell>
                <TableCell>{this.props.hosthome}</TableCell>
                <TableCell>{this.props.hostphone}</TableCell>
                <TableCell>{this.props.gradename}</TableCell>
                
            </TableRow>
        )
    }
   
}

export default HostList