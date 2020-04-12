import React from 'react'

const NotFound = ({history}) => (
	<div>
		<h3>404 NOT FOUND</h3>
		<button onClick={() => history.push("/")}>
			Go Home
		</button>
	</div>
)

export default NotFound