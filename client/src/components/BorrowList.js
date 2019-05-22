import React, {Component} from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ReturnButton from './ReturnButton';

class BorrowList extends Component{
   constructor(props){
       super(props)
           this.setState({
               good : true
           })
       }
       
      handleCloseButton = () =>{
        this.setState({
            good : false
        })
      }
      handleClick = () =>{
        this.setState({
            good : true
        })
      }
   
    render(){
        return(
                <TableRow>
                    <TableCell>{this.props.hostname}</TableCell>
                    <TableCell>{this.props.hostphone}</TableCell>
                    <TableCell>{this.props.movietitle}</TableCell> 
                    <TableCell>{this.props.borrowday}</TableCell>
                    <ReturnButton></ReturnButton>
                </TableRow>
        )
    }
}
export default BorrowList;