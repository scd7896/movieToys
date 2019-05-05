import React, { Component} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
          signUp : false
        }
      }
      handleCloseButton = () =>{
        this.setState({
            signUp : false
        })
      }
      handleClick = () =>{
        this.setState({
            signUp : true
        })
      }
    render(){
        return(
            <div>
        <Button variant = "contained" color = "primary" onClick ={this.handleClick}> 회원가입</Button>
        <Dialog open ={this.state.signUp} onClose = {this.handleCloseButton}>
          <DialogTitle> 회원가입</DialogTitle>
          <DialogContent></DialogContent>
        </Dialog>
        
            </div>
        )
    }
}
export default Signup;