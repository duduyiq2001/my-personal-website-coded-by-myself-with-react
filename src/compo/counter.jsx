import React,{Component} from 'react';
import  Badge  from 'react-bootstrap/Badge';
import  Button  from 'react-bootstrap/Button';



class Counter extends Component {
  
   
    render() {
        return (
            <div >
                 <div className='sentence' style={{color:"#cccccc"}}>
                    
                    out of 10, how much would you rate this project?
                
            </div>
            <div className='d-flex p-2 w-30'>
                <Badge bg = "secondary" className='w-50 m-2'>
                    {this.props.count}
                </Badge>
                {' '}
                
                <Button variant='primary' className = 'mr-2 w-25 h-80' size = "sm" onClick = {this.props.count < 10 ? this.props.incre : null}>
                    +
                </Button>{' '}
                <Button variant='danger' className = 'mr-2 w-25 h-80' size = "sm" onClick ={this.props.count > 0 ? this.props.decre : null}>
                    -
                </Button>
                
            </div>
            </div>
        );
    }
}

export default Counter;

