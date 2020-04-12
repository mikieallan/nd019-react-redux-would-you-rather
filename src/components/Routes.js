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
				props.notLoggedIn ? <Route path='/' exact component = {Login} /> :
					<Fragment>
						<Route exact path='/' component={Dashboard} />
						<Route exact path='/add' component={AddQuestion} />
						<Route exact path='/logout' component={Logout} />
						<Route exact path='/leaderboard' component={Leaderboard} />
						<Route path="/questions/:id" component={QuestionDetails} />
					</Fragment>
			}
			<Route component={NotFound} />
		</Switch>
	</div>
}

export default Routes