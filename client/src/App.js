import React, {Component} from 'react';
import './App.css';
import HostTable from './components/HostTable'
import Borrow from './components/Borrow';
import BorrowList from './components/BorrowList';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';



const styles = theme =>({
  hidden :{
    display : 'none'
  }
})

class App extends Component {
  constructor(props){
    super(props)
      this.state ={
        borrowTable : '',
        hostTable : ''
      }
    
  }
  componentDidMount(){
    this.callApi()
      .then(res=> this.setState({borrowTable : res}))
      .catch(err => console.log(err));
    this.callApi2()
        .then(res => this.setState({
          hostTable : res
        }))
      .catch(err=>console.log(err));
  }
  callApi2 = async() =>{
    const response = await fetch('/api/hosts');
    const body = await response.json();
    return body;
}
  callApi = async()=>{
    const response = await fetch('/api/users');
    const body = await response.json();
    return body;
  }
  render(){
    const callTable = (data)=>{
      return data.map((c)=>{
        return(
          <BorrowList movietitle = {c.movietitle} moviecost = {c.moviecost}
          genrename = {c.genrename}></BorrowList>
        )
      })
    }
    

    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><HostTable hostTable ={this.state.hostTable}></HostTable></TableCell>
              <TableCell><Borrow></Borrow></TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <Table>
        <TableHead>
            <TableRow>
              <TableCell>영화제목</TableCell>
              <TableCell>영화가격</TableCell>
              <TableCell>장르</TableCell>
              <TableCell>반납</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {this.state.borrowTable ? callTable(this.state.borrowTable) : "데이터를 불러오는중"}
          </TableBody>
        </Table>
      
        
        
      </div>
    );
  }
}

export default App;
