import React,{Component} from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class BorrowList extends Component{
    constructor (props){
        super(props)
        setState ({
            open : false
        })
    }
    render(){
        return(
            <div>
                <TableRow>
                    <TableCell>{this.props.}</TableCell>
                </TableRow>
                <Button variant="contained" color ="primary" >
                    비디오 반납
                </Button>
                <Dialog open ={this.props.signUp} onClose = {this.props.handleCloseButton}>
                    <DialogTitle> 비디오 반납</DialogTitle>
                    <DialogContent></DialogContent>
                </Dialog>
            </div>
        )
    }
}
export default BorrowList;