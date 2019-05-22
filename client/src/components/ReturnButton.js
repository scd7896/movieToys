import React,{Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import {post} from 'axios';
class ReturnButton extends Component{
    state = {
        good : false
    }
   
      handleClick = () =>{
        this.setState({
            good : !this.state.good
        })
      }
      returnVideo = (id) =>{
        const url = '/api/returnvideo/'+id;
        fetch(url,{
            method: 'DELETE'
        });
        document.location.reload();
      }
    render(){
        return(
            <div>
                    <Button variant = "contained" color = "primary" onClick ={this.handleClick}> 비디오반납</Button>
                    <Dialog open = {this.state.good} onClose = {this.handleClick}>
                        <DialogTitle> 반납확인</DialogTitle>
                        <DialogContent>반납하시겠습니까??</DialogContent>
                        <Button onClick = {this.returnVideo}>확인</Button><Button onClick = {this.handleCloseButton}>취소</Button>

                    </Dialog>
            </div>
        )
    }
}
export default ReturnButton;