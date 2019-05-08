import React,{ Component}from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import Signup from './Signup';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import HostList from './HostList'
class HostTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            openD: false
        }
    }
    
  
    clickHandling = ()=>{
        this.setState({
            openD : true
        })
    }
    closeHandling = () =>{
        this.setState({
            openD: false
        })
    }
    render(){
        const callTable = (data)=>{
            return data.map((c)=>{
              return(
                <HostList hostname ={c.hostname} hosthome = {c.hosthome} hostphone = {c.hostphone} gradename = {c.gradename}></HostList>
              )
            })
          }
        return(
            <div>
                <Button onClick = {this.clickHandling}>회원리스트보기</Button>
                <Dialog open ={this.state.openD} onClose = {this.closeHandling}>
                    <DialogTitle>회원 리스트</DialogTitle>
                    <Table>
                       <TableBody>
                       {this.props.hostTable ? callTable(this.props.hostTable) : "데이터를 불러오는중"}
                       </TableBody>
                    </Table>
                   <Signup></Signup>
                </Dialog>
            </div>
        )
    }
}

export default HostTable;