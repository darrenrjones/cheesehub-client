import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { postCheese } from '../actions/cheese';

export class CheeseForm extends React.Component{

  submitNewCheese(fields){
    console.log(fields.newCheese);
    console.log(this.props);
    
    this.props.dispatch(postCheese({newCheese : fields.newCheese})) 
       
  }

  render() {
    return( 
      <div>
        <form onSubmit={this.props.handleSubmit(fields => this.submitNewCheese(fields) )}>
          <div>
            <label>Enter a new cheese!</label>
            <div>
              <Field
                name="newCheese"
                component="input"
                type="text"
                placeholder="enter new cheese here..."
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'cheeseForm'
})(CheeseForm)

