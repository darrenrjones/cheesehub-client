import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses, postCheese } from '../actions/cheese';
import { Field, reduxForm} from 'redux-form';
import CheeseForm from './cheese-form';
import './cheese-list.css';


export class CheeseList extends React.Component{
    
  componentDidMount(){
    this.props.dispatch(fetchCheeses())
  }




render() {
  
    let cheeseList = this.props.cheeses.map((cheese, i) => <li className='li' key={i}>{cheese}</li> )
   return(
    <div className='main-container'>
      <h1>Welcome to CheeseHub!</h1>
      <div className='cheese-list'>
        <ul className='ul'>
          {cheeseList}
        </ul>
      </div>
      <CheeseForm />
    </div>



    );
  };   
}

  const mapStateToProps = state => ({
    cheeses: state.cheeseReducer.cheeses
  })
    
export default connect(mapStateToProps)(CheeseList);