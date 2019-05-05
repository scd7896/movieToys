import React,{Component} from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
                    <TableCell>{this.props.movietitle}</TableCell>
                    <TableCell>{this.props.moviecost}</TableCell>
                    <TableCell>{this.props.genrename}</TableCell> 
                    <ReturnButton></ReturnButton>
                </TableRow>
        )
    }
}
export default BorrowList;