import React, { Fragment } from 'react'
import { Switch , Route } from "react-router-dom";

import Dashboard from './Dashboard'
import AddQuestion from './AddQuestion'
import NotFound from './NotFound'
import Login from './Login'
import Logout from './Logout'
import QuestionDetails from './QuestionDetails'
import Leaderboard from './Leaderboard'

function Routes(props) {
	return <div className="container">
		<Switch>
			 {
			 	props.notLoggedIn ? <Login /> :
					<Fragment>
						<Route exact path='/' component={Dashboard} />
						<Route path='/add' component={AddQuestion} />
						<Route path='/logout' component={Logout} />
						<Route path='/leaderboard' component={Leaderboard} />
						<Route path="/questions/:id" component={QuestionDetails} />
					</Fragment>
				
			}
			<Route component={NotFound} />
		</Switch>
	</div>
}

export default Routes