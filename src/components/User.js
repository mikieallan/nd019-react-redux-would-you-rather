import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class User extends Component {
	render () {
		const { user } = this.props
		return (
			<div>
				<Fragment>
					<span>{user.name}</span>
					<img src={user.avatarURL} className="avatar"/>
				</Fragment>
			</div>
		)
	}
}

function mapStateToProps({ users }, { id }){
	return {
		user: users[id]
	}
}

export default connect(mapStateToProps)(User)