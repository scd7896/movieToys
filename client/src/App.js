import React, {Component} from 'react';

import HostTable from './components/HostTable'
import Borrow from './components/Borrow';
import BorrowList from './components/BorrowList';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import AddVedio from './components/AddVedio';


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
        hostTable : '',
        searchKeyword : ''
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

  stateRefresh = () =>{
    this.setState({
      hostTable: '',
      borrowTable : '',
      completed: 0,
      searchKeyword : ''
    })
    this.callApi()
      .then(res => this.setState({borrowTable : res}))
      .catch(err => console.log(err));
    this.callApi2()
    .then(res => this.setState({hostTable : res}))
    .catch(err => console.log(err));
  }

  render(){
    const callTable = (data)=>{
      return data.map((c,index)=>{
        return(
          <BorrowList  movietitle = {c.movietitle} moviecost = {c.moviecost}
          genrename = {c.genrename} hostnumber = {c.hostnumber}></BorrowList>
        )
      })
    }
  

    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <HostTable stateRefresh ={this.stateRefresh} hostTable ={this.state.hostTable}></HostTable>
              <Borrow hostTable ={this.state.hostTable}></Borrow>
              <AddVedio stateRefresh = {this.stateRefresh}></AddVedio>
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
              {this.state.borrowTable ? callTable(this.state.borrowTable) : "데이터를 불러오는중"  }
          </TableBody>
        </Table>
      
        
        
      </div>
    );
  }
}

export default App;
