import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import { postCheese } from '../actions/cheese';

import { isEmpty } from '../validators'

export class CheeseForm extends React.Component{

  submitNewCheese(fields){
    console.log(fields.newCheese);
    console.log(this.props);
    
    this.props.dispatch(postCheese({newCheese : fields.newCheese}));
    this.props.dispatch(reset('cheeseForm')); 
       
  }

  render() {
    return( 
      <div>
        <form className='form' onSubmit={this.props.handleSubmit(fields => this.submitNewCheese(fields) )}>
          <div>
            <label>Enter a new cheese!</label>
            <div>
              <Field
                name="newCheese"
                component="input"
                type="text"
                placeholder="enter new cheese here..."
                validate={[isEmpty]}
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
  form: 'cheeseForm',
  isEmpty
})(CheeseForm)

