import React from 'react'

class Homepage extends React.Component{
	render(){
		return <div>
			My first es6 React Component
		</div>
	}
}

React.render(<Homepage/>, document.getElementById('app'));