import React,{Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class ReturnButton extends Component{
    state = {
        good : false
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
      returnVideo = () =>{
          this.setState({
              good:false
          })
      }
    render(){
        return(
            <div>
                    <Button variant = "contained" color = "primary" onClick ={this.handleClick}> 비디오반납</Button>
                    <Dialog open = {this.state.good} onClose = {this.handleCloseButton}>
                        <DialogTitle> 반납확인</DialogTitle>
                        <DialogContent>반납하시겠습니까??</DialogContent>
                        <Button onClick = {this.returnVideo}>확인</Button><Button onClick = {this.handleCloseButton}>취소</Button>

                    </Dialog>
            </div>
        )
    }
}
export default ReturnButton;