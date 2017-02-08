import React, { Component } from 'react';

class UserInput extends Component {
	constructor(){
		super()
		this.state = {
			userName: '',
			hometown: ''
		}
		this.handleUser = this.handleUser.bind(this)
		this.handleHometown = this.handleHometown.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleUser(event){
		this.setState({
			userName: event.target.value
		})
	}

	handleHometown(event){
		this.setState({
			hometown: event.target.value
		})
	}

	handleSubmit(event){
		event.preventDefault()
		console.log('Form submitted!')
		this.props.store.dispatch({type: 'ADD_USER', payload: {userName: this.state.userName, hometown: this.state.hometown}})
		this.setState({userName: '', hometown: ''})
	}


  render(){
    return(
      <div>
      	<form onSubmit = {this.handleSubmit}>
	      	<input type='text' onChange={this.handleUser} value={this.state.userName} />
	      	<input type='text' onChange={this.handleHometown} value={this.state.hometown} />
	      	<input type='submit'/>
        </form>
      </div>
    )
  }
}

export default UserInput;
