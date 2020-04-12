import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap'
import Question from './Question'

class Dashboard extends Component {
	state = {
		activeTab: '1'
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			})
		}
	}

	render() {
		const { unansweredQuestions, answeredQuestions } = this.props
		const { activeTab } = this.state
		return (
			<div>
			<Nav pills>
				<NavItem>
					<NavLink 
						active={this.state.activeTab === '1'}
						onClick={() => {this.toggle('1')}}
					>
						Unanswered
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink 
						active={this.state.activeTab === '2'}
						onClick={() => {this.toggle('2')}}
					>
						Answered
					</NavLink>
				</NavItem>
			</Nav>


			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<Row>
						{unansweredQuestions.map(qid => 
							<Col key={qid} sm="6" md="4">
								<Question id={qid} />
							</Col>
						)}
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						{answeredQuestions.map(qid =>
							<Col key={qid} sm="6" md="4">
								<Question id={qid} />
							</Col>
						)}
					</Row>
				</TabPane>
			</TabContent>
			</div>
		)
	}
}

function mapStateToProps({ questions, users, authedUser }) {
	const user = users[authedUser]
	const answeredQuestions = Object.keys(user.answers)
		.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
	return {
		unansweredQuestions : Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
			.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		answeredQuestions
	}
}

export default connect(mapStateToProps)(Dashboard)