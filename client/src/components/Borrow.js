import React,{Component} from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
class Borrow extends Component{
    constructor(props){
        super(props);
        this.state = {
          borrow : false
        }
      }
      handleCloseButton = () =>{
        this.setState({
            borrow : false
        })
      }
      handleClick = () =>{
        this.setState({
            borrow : true
        })
      }
    render(){
        return(
            <TableCell>
                <Button variant="contained" color ="primary" onClick ={this.handleClick}>
                    비디오 빌리기
                </Button>
                <Dialog open ={this.state.borrow} onClose = {this.handleCloseButton}>
                    <DialogTitle> 비디오 대여</DialogTitle>
                    <DialogContent></DialogContent>
                </Dialog>
            </TableCell>
        )
    }
}
export default Borrow;