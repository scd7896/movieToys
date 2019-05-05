import React, {Component} from 'react';
import './App.css';
import Signup from './components/Signup';
import Borrow from './components/Borrow';
//import BorrowList from './components/BorrowList';
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
        borrowTable : ''
      }
    
  }
  
  render(){
    // const callTable = (data)=>{
    //   return data.map((c)=>{
    //     return(
    //       <BorrowList></BorrowList>
    //     )
    //   })
    // }

    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Signup></Signup></TableCell>
              <TableCell><Borrow></Borrow></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         
          </TableBody>
        </Table>
      
        
        
      </div>
    );
  }
}

export default App;
