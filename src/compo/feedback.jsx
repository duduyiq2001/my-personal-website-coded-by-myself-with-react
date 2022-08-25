import React,{Component} from 'react';
import Counter from './counter';
import Commentbox from './commentbox'
export default class Feedback extends Component{
    constructor(props){
        super(props);
        this.increment = this.increment.bind(this);
        this.decrease  = this.decrease.bind(this);
        this.submit = this.submit.bind(this);
    }
    state = {
        count :0

    }
    increment(){
        this.setState({count:this.state.count+1});
    }
    decrease(){
        this.setState({count:this.state.count-1});
    }
    submit(username,comment){
        console.log(this.state.count);
        console.log(document.getElementById('name').value);
        console.log(document.getElementById('text').value);

    }
    render(){
        return(
        <div className='feedbackbox1'>
         <h1 className='formbuttons'>Feedback</h1>
        <Counter count = {this.state.count}  incre = {this.increment} decre = {this.decrease} className = "formbuttons"/>
        <Commentbox submitfunc = {this.submit} className = "formbuttons" />
        </div>
        )

    }
    
}

