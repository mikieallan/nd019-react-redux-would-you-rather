import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Button, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class AddQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		redirect: false
	}

	handleOptionOneChange = (e) => {
		e.preventDefault()
		this.setState({
			optionOne : e.target.value
		})
	}

	handleOptionTwoChange = (e) => {
		e.preventDefault()
		this.setState({
			optionTwo : e.target.value
		})
	}	

	handleCancel = (e) => {
		e.preventDefault()
		this.setState({redirect: true})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const { optionOne, optionTwo } = this.state
		this.props.addQuestion(optionOne, optionTwo)
		this.setState({ redirect: true })
	}

	render () {
		if (this.state.redirect) {
			return <Redirect to='/' />
		}

		const { optionOne, optionTwo } = this.state

		return (
			<Container>
				<Row>
					<Col sm="12" md={{size: 6, offset: 3}} lg="18">
						<Card>
							<CardBody>
								<CardHeader body className="text-center" tag="h3">Would you Rather</CardHeader>
								<Form onSubmit={this.handleSubmit}>
									<FormGroup>
										<Label for="optionOne" style={{marginTop: '10px'}}>Option One</Label>
										<Input 
											type="text"
											name="optionOne"
											value={optionOne}
											onChange={this.handleOptionOneChange}
											placeholder="Option One"
										/>
									</FormGroup>
									<FormGroup>
										<Label for="optionTwo">Option Two</Label>
										<Input 
											type="text"
											name="optionTwo"
											value={optionTwo}
											onChange={this.handleOptionTwoChange}
											placeholder="Option Two"
										/>
									</FormGroup>
									<Button onClick={this.handleCancel}>Cancel</Button>
									<Button className="float-right" disabled={optionOne === '' || optionTwo === ''} color="primary">Submit</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}
}

function mapDispatchToProps (dispatch) {
	return {
		addQuestion: (optionOne, optionTwo) => {
			dispatch(handleAddQuestion(optionOne, optionTwo))
		}
	}
}

export default connect(null, mapDispatchToProps)(AddQuestion)