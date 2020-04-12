import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import User from './User'

class Leaderboard extends Component {

	render () {
		const { users } = this.props
		return (
			<Table dark>
				<thead>
					<tr>
						<th>Rank</th>
						<th>User</th>
						<th>Questions asked</th>
						<th>Questions answered</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr>
							<td>{index + 1}</td>
							<td><User id={user.id}/></td>
							<td>{user.questions.length}</td>
							<td>{Object.keys(user.answers).length}</td>
						</tr>
					))}
				</tbody>
			</Table>
		)
	}
}

function mapStateToProps ({ users }) {
	const userScore = user => Object.keys(user.answers).length + user.questions.length
	return {
		users: Object.values(users).sort((a,b) => userScore(b) - userScore(a))
	}
}

export default connect(mapStateToProps)(Leaderboard)