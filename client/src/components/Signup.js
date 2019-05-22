import React, { Component} from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './css/Sign.css'
class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
          signUp : false,
          hostname :'',
          hostnumber : '',
          hostphone : '',
          hosthome : ''
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
      handleValueChange = (e)=>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        console.log(this.state.hostname);
        
    }
    handleFormSubmit = (e) =>{
      e.preventDefault();
      this.addHosts()
          .then((res)=>{
              this.props.stateRefresh();
          })
          this.setState({
            signUp : false,
            hostname :'',
            hostphone : '',
            hosthome : ''
          })
  }
  addHosts = () =>{
    const url = 'api/hostadd';
    let formData = new FormData();
    formData.append('hostname', this.state.hostname);
    formData.append('hostphone', this.state.hostphone);
    formData.append('hosthome', this.state.hosthome);
    
    const config = {
        headers :{
            'content-type' :'multipart/form-data'
        }
    }
    return post(url, formData, config);
}
    render(){
        return(
            <DialogActions>
        <Button variant = "contained" color = "primary" onClick ={this.handleClick}> 회원가입</Button>
        <Dialog open ={this.state.signUp} onClose = {this.handleCloseButton}>
          <DialogTitle> 회원가입</DialogTitle>
          <DialogContent>
          <div><TextField value = {this.state.hostname} type ="text" name="hostname" label ="이름" onChange = {this.handleValueChange}></TextField></div>
          <div><TextField value = {this.state.hostphone} type ="text" name="hostphone" label ="핸드폰" onChange = {this.handleValueChange}></TextField></div>
          <div><TextField value = {this.state.hosthome} type ="text" name="hosthome" label ="주소" onChange = {this.handleValueChange}></TextField></div>
          </DialogContent>
          <DialogActions>
          <Button variant="contained" color ="primary" onClick = {this.handleFormSubmit}>회원가입</Button> 
          <Button variant="contained" onClick = {this.handleCloseButton}>취소하기</Button>
          </DialogActions>
          
          </Dialog>
        
          </DialogActions>
        )
    }
}
export default Signup;