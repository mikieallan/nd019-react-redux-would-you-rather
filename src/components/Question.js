import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'

class Question extends Component {
	goToQuestionDetails(e, questionId){
		let path = `/questions/`+questionId
		this.props.history.push(path)
	}

	render() {
		const {question, authedUser} = this.props

		return (
			<Card onClick={(e) => this.goToQuestionDetails(e, question.id)}>
				<CardBody>
					<CardTitle>Would You Rather</CardTitle>
						<ListGroup>
							<ListGroupItem className={question.optionOne.votes.includes(authedUser) ? "userAnswer" : ""}>{question.optionOne.text}</ListGroupItem>
							<ListGroupItem className={question.optionTwo.votes.includes(authedUser) ? "userAnswer" : ""}>{question.optionTwo.text}</ListGroupItem>
						</ListGroup>
				</CardBody>
			</Card>
		)
	}
}

function mapStateToProps (state, { id }) {
	return {
		question : state.questions[id],
		authedUser: state.authedUser
	}
}

export default withRouter(connect(mapStateToProps)(Question))