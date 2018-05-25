import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/cheese';


export class CheeseList extends React.Component{
    
  componentDidMount(){
    this.props.dispatch(fetchCheeses())
  }
render() {
    let cheeseList = this.props.cheeses.map((cheese, i) => <li key={i}>{cheese}</li> )
   return(

      <ul>
        {cheeseList}
      </ul>

    );
  };   
}

  const mapStateToProps = state => ({
    cheeses: state.cheeseReducer.cheeses
  })

  export default connect(mapStateToProps)(CheeseList);