import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { handleInitialData } from '../actions/shared'
import Routes from './Routes'
import MyNav from './MyNav'

class App extends Component {
	componentDidMount(){
		this.props.handleInitialData()
	}

	render() {
		const { notLoggedIn } = this.props

		return (
			<Router>
				<Fragment>
					<div>
						<MyNav />
						<Routes notLoggedIn={notLoggedIn}/>
					</div>
				</Fragment>
			</Router>
		)
	}
}

function mapStateToProps ({ authedUser }) {
	return {
		notLoggedIn: authedUser === null
	}
}

function mapDispatchToProps(dispatch){
	return {
		handleInitialData: () => {
			dispatch(handleInitialData())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)