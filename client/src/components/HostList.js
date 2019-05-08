import React,{component} from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Component } from 'react';
class HostList extends Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.hostname}</TableCell>
                <TableCell>{this.props.hosthome}</TableCell>
                <TableCell>{this.props.hostphone}</TableCell>
                <TableCell>{this.props.gradename}</TableCell>
            </TableRow>
        )
    }
   
}

export default HostList