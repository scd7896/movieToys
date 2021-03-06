import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Component } from 'react';

class HostList extends Component{
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