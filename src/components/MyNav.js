import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import User from './User'


class MyNav extends Component{
	render() {
		const { authedUser } = this.props

		return (
			<div>
		      <Navbar color="light" light expand="md">
		        <NavbarBrand tag={Link} exact to="/">Would You Rather</NavbarBrand>
		        {authedUser && 
	        	<Collapse navbar>
		          <Nav className="myNavBar" navbar>
		            <NavItem>
		              <NavLink tag={Link} exact to="/">Home</NavLink>
		            </NavItem>
		            <NavItem>
		              <NavLink tag={Link} exact to="/add" >Add</NavLink>
		            </NavItem>
		            <NavItem>
		              <NavLink tag={Link} exact to="/leaderboard" >Leaderboard</NavLink>
		            </NavItem>
	              </Nav>
		        </Collapse>
		    	}
		    	{authedUser && 
		        <Nav navbar>
		          <NavItem>
                	  <User id={authedUser} />
                	</NavItem>
		          <NavItem>
		          	<NavLink tag={Link} to='/logout'>Logout</NavLink>
		          </NavItem>
		      	</Nav>
		      }
		      </Navbar>
		    </div>
		)
	}
}

function mapStateToProps ({ authedUser }) {
	return {
		authedUser
	}
}

export default withRouter(connect(mapStateToProps)(MyNav))