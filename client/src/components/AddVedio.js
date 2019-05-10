import React,{Component} from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import { post } from 'axios';

class AddVedio extends Component {
    constructor(props){
        super(props)
        this.state ={
            movietitle :'',
            copytype : '',
            handling : false,
        }
    }
    handleClick =() =>{
        this.setState({
            handling : true
        })
    }
    handleValueChange = (event)=>{
       
        this.setState({
            movietitle : event.target.value
        });
    
    }
    clickClose = () =>{
        this.setState({
            handling : false
        })
        console.log(this.state.movietitle);
        console.log(this.state.copytype)
    }
    clickHanling = (e) =>{
        this.setState({
            copytype : e.target.value
        });
    }
    handleFormSubmit = (e) =>{
        
        e.preventDefault();
        this.addVedios()
            .then((res)=>{
                this.props.stateRefresh();
            })
            this.setState({
                movietitle :'',
                copytype : '',
                handling : false,
            })
    }
    addVedios = () =>{
        
        const url = 'api/vedioadd';
        let formData = new FormData();
        formData.append('movietitle', this.state.movietitle);
        formData.append('copytype', this.state.copytype);
       
        const config = {
            headers :{
                'content-type' :'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

 
    render(){
        return(
        <TableCell>
            <Button variant="contained" color ="primary" onClick ={this.handleClick}>
                비디오 추가하기
            </Button>
            <Dialog open ={this.state.handling} onClose = {this.handleCloseButton}>
                <DialogTitle> 비디오 대여</DialogTitle>
                <DialogContent>
                    <div><TextField value = {this.state.movietitle} type ="text" name="movietitle" label ="영화이름" onChange = {this.handleValueChange}></TextField></div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">복사 양식</FormLabel>
                        <RadioGroup
                            aria-label="복사 양식"
                            name = "copytype"
                        >
                            <FormControlLabel value="DVD" control={<Radio />} label="DVD" onClick ={this.clickHanling}/>
                            <FormControlLabel value="CD" control={<Radio />} label="CD" onClick ={this.clickHanling}/>
                            <FormControlLabel value="블루레이" control={<Radio />} label="블루레이" onClick ={this.clickHanling}/>
                            <FormControlLabel value="비디오" control={<Radio />} label="비디오" onClick ={this.clickHanling}/>
                        </RadioGroup>
                        </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick = {this.handleFormSubmit}>추가하기</Button>
                    <Button onClick = {this.clickClose}>취소하기</Button>
                </DialogActions>
            </Dialog>
        </TableCell>
        )
    }
}

export default AddVedio;


