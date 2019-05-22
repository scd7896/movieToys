import React,{ Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import HostList from "./HostList";
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody";
import {post} from 'axios';

class Borrow extends Component{
    constructor(props){
        super(props);
        this.state = {
          borrow : false,
          subClick : false,
          movieOpen : false,
          uploadingUserId : '',
          uploadingVedioId : '',
          userName : '', 
        }
      }
      handleCloseButton = () =>{
        this.setState({
            borrow : false
        })
      }
      handleClick = () =>{
        this.setState({
            borrow : true,
            movieOpen : false
        })
      }
      subClicking = () =>{
          this.setState({
            subClick : true
          })
      }
      handleSubClose = () =>{
          this.setState ({
            subClick: false
          })
      }
      mycallback = (dataFromChild)=>{
          this.setState({
            uploadingUserId : dataFromChild.hostnumber,
            subClick: false
          });
      }
      clickTest = () =>{
          this.setState({
              borrow : false
          })
      }
      handleValuChange = (e) => {
        this.setState({
            userName : e.target.value
        })
      }

      movieOpening = () =>{
          this.setState({
              movieOpen : true
          })
      }
    render(){
        const callTable = (data)=>{
            return data.map((c, index)=>{
              return(
                <HostList onCreate = {this.mycallback} hostname ={c.hostname} hosthome = {c.hosthome} hostphone = {c.hostphone} gradename = {c.gradename}
                    hostnumber = {c.hostnumber}></HostList>
              )
            })
          }
        return(
            <TableCell>
                <Button variant="contained" color ="primary" onClick ={this.handleClick}>
                    비디오 빌리기
                </Button>
                <Dialog open ={this.state.borrow} onClose = {this.handleCloseButton}>
                    <DialogTitle> 비디오 대여</DialogTitle>
                    <DialogContent>
                        <p>ID : <TextField value = {this.state.uploadingUserId}>{this.uploadingForId}</TextField></p>
                        <p><TextField onChange = {this.handleValuChange}></TextField>
                        <Button onClick = {this.subClicking}>이름으로 검색</Button></p>
                        <p><TextField label = "영화고유번호" value = {this.uploadingVedioId}>{this.uploadingForId}</TextField></p>
                        <p><TextField onChange = {this.handleValuChange}></TextField>
                        <Button onClick = {this.movieOpening}>영화 검색</Button></p>
                        
                        <Dialog open ={this.state.subClick} onClose={this.handleSubClose}>
                            <DialogTitle>회원 정보</DialogTitle>
                            <DialogContent>
                                <Table>
                                    <TableBody>
                                        {this.props.hostTable ? callTable(this.props.hostTable) : "데이터를 불러오는중"}
                                    </TableBody>
                                </Table>
                            </DialogContent>
                        </Dialog>
                        <Dialog open ={this.state.movieOpen} onClose={this.handleSubClose}>
                            <DialogTitle>영화 정보</DialogTitle>
                            <DialogContent>
                                <Table>
                                    <TableBody>
                                        {this.props.hostTable ? callTable(this.props.hostTable) : "데이터를 불러오는중"}
                                    </TableBody>
                                </Table>
                            </DialogContent>
                        </Dialog>
                        <Button onClick = {this.clickTest}>확인</Button>
                    </DialogContent>
                    <DialogActions></DialogActions>
                </Dialog>
            </TableCell>
        )
    }
}
export default Borrow;