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
class Borrow extends Component{
    constructor(props){
        super(props);
        this.state = {
          borrow : false,
          subClick : false,
          uploadingForId : null,
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
            uploadingForId : dataFromChild.hostnumber,
            subClick: false
          });
          console.log(this.state.uploadingForId);
      }
      clickTest = () =>{
          this.setState({
              borrow : false
          })
          console.log(this.state.uploadingForId)
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
                        <TextField label = "id" value = {this.uploadingForId}>{this.uploadingForId}</TextField>
                        <TextField></TextField>
                        <Button onClick = {this.subClicking}>이름으로 검색</Button>
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
                        <Button onClick = {this.clickTest}>확인</Button>
                    </DialogContent>
                    <DialogActions></DialogActions>
                </Dialog>
            </TableCell>
        )
    }
}
export default Borrow;