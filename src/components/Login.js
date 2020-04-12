import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {userId: ''}
		this.handleChangeUser = this.handleChangeUser.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChangeUser(e) {
		this.setState({userId: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault()

		const { userId } = this.state
		const { authenticate } = this.props

		if (userId) {
			authenticate(userId)
		} else {
			alert('Please select a user')
		}
	}

	render () {
		const { users } = this.props
		const { userId } = this.state 
		
		return(
			<Row>
				<Col>
					<Form onSubmit={this.handleSubmit}>
						<FormGroup>
							<Label for="userSelect">Select User</Label>
							<Input 
								id="userSelect"
								type="select"
								name="select"
								value={userId}
								onChange={this.handleChangeUser}
							>
							<option value="" disabled>Please select</option>
							{
								Object.keys(users).map(user => 
									<option key={user} value={user}>
										{users[user].name}
									</option>)
							}
							</Input>
						</FormGroup>
						<Button disabled={userId === ''}>Submit </Button>
					</Form>
				</Col>
			</Row>
		)

	}
}

function mapStateToProps({ users }) {
	return {
		users
	}
}

function mapDispatchToProps (dispatch) {
	return {
		authenticate: (id) => {
			dispatch(setAuthedUser(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)