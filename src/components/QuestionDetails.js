import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardBody, Row, Col, CardHeader, Form, FormGroup, CardFooter, Label, Input, Progress } from 'reactstrap'
import { handleAnswerQuestion, handleDeleteAnswer } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import User from './User'

class QuestionDetails extends Component {
	state = {
		selection: '',
		redirect: false
	}

	handleSelection = (e) => {
		this.setState({
			selection: e.target.value
		})
	}

	handleBack = (e) => {
		e.preventDefault()
		this.setState({redirect: true})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.saveAnswer(this.state.selection)
		this.setState({selection: ''})
	}

	handleUpdate = (e) => {
		e.preventDefault()
		const { selection } = this.state
		let oppositeOfSelection = null
		if (selection === 'optionOne') {
			oppositeOfSelection = 'optionTwo'
		} else {
			oppositeOfSelection = 'optionOne'
		}
		this.props.deleteAnswer(oppositeOfSelection)
		this.props.saveAnswer(selection)
	}

	render () {
		const { question, questionAuthorId, userAnswer, optionOnePerc, optionTwoPerc, optionOneVotes,optionTwoVotes } = this.props
		const { selection, redirect } = this.state

		if (this.state.redirect) {
			return <Redirect to='/' />
		}
		console.log(selection)

		return (

			<Row>
				<Col sm="12" md={{size: 6, offset: 3}}>
					<Card>
						<CardHeader>Would You Rather</CardHeader>
							<CardBody>
								<Form onSubmit={this.handleSubmit}>
									<FormGroup>
										<FormGroup answer>
											{userAnswer === 'optionOne' ?
												<Label answer style={{marginLeft: '15px'}}>
													<Input 
														type="radio" 
														name="radio" 
														value="optionOne" 
														onChange={this.handleSelection}
													/>{' '}<p className="userAnswer">{question.optionOne.text}</p>
												</Label> :
												<Label answer style={{marginLeft: '15px'}}>
													<Input 
														type="radio" 
														name="radio" 
														value="optionOne" 
														onChange={this.handleSelection}
													/>{' '}{question.optionOne.text}
												</Label>
											}
										</FormGroup>
										<FormGroup answer>
											{userAnswer === 'optionTwo' ?
												<Label answer style={{marginLeft: '15px'}}>
													<Input 
														type="radio" 
														name="radio" 
														value="optionTwo" 
														className="userAnswer"
														onChange={this.handleSelection}
													/>{' '}<p className="userAnswer">{question.optionTwo.text}</p>
												</Label> :
												<Label answer style={{marginLeft: '15px'}}>
													<Input 
														type="radio" 
														name="radio" 
														value="optionTwo"
														onChange={this.handleSelection}
													/>{' '}{question.optionTwo.text}
												</Label>
											}
										</FormGroup>
									</FormGroup>
									<Button onClick={this.handleBack}>Back</Button>
									{ userAnswer ?
										<Button onClick={this.handleUpdate} color="primary" className="float-right" disabled={selection === userAnswer || selection === ''}>Update</Button> :
										<Button color="primary" className="float-right" disabled={selection === ''}>Submit</Button>
									}
								</Form>
							</CardBody>
						<CardFooter>
						{ userAnswer ? 
							userAnswer === 'optionOne' ?
							<div className="text-center">
								{ optionOneVotes === 1 ? 
									<p>{optionOneVotes + ' person voted for Option 1'}</p> :
									<p>{optionOneVotes + ' people voted for Option 1'}</p>
								}
								<p>{'This is ' + optionOnePerc + '% of votes'}</p>
								<Progress value={optionOnePerc} color="info"/>
							</div> :
							<div className="text-center">
								{ optionTwoVotes === 1 ? 
									<p>{optionTwoVotes + ' person voted for Option 2'}</p> :
									<p>{optionTwoVotes + ' people voted for Option 2'}</p>
								}
								<p>{'This is ' + optionTwoPerc + '% of votes'}</p>
								<Progress value={optionTwoPerc} color="info"/>
							</div> : <p><b><em>Not yet voted</em></b></p>	
						}
						
						<Label className="float-center">Question Author: <User id={questionAuthorId} /></Label>
						</CardFooter>
					</Card>
				</Col>
			</Row>

		)
	}

}

function stringToFloat(x){
	return Number.parseFloat(x).toFixed(0)
}

function mapStateToProps({ questions, users, authedUser }, {match}){
	const { id } = match.params
	const question = questions[id]
	const usersAnswers = users[authedUser].answers
	const questionAuthorId = questions[id].author
	let userAnswer, optionOneVotes, optionTwoVotes, optionOnePerc, optionTwoPerc, totalVotes = null
	if (usersAnswers.hasOwnProperty(question.id)) {
		userAnswer=usersAnswers[question.id]
	}
	optionOneVotes = question.optionOne.votes.length
	optionTwoVotes = question.optionTwo.votes.length
	totalVotes = optionOneVotes + optionTwoVotes

	optionOnePerc = stringToFloat((optionOneVotes / totalVotes) * 100)
	optionTwoPerc = stringToFloat((optionTwoVotes / totalVotes) * 100)

	return {
		question,
		questionAuthorId,
		userAnswer,
		optionOnePerc,
		optionTwoPerc,
		optionOneVotes,
		optionTwoVotes
	}
}

function mapDispatchToProps(dispatch, props){
	const { id } = props.match.params

	return {
		deleteAnswer: (answer) => {
			dispatch(handleDeleteAnswer(id, answer))
		},

		saveAnswer: (answer) => {
			dispatch(handleAnswerQuestion(id, answer))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionDetails)