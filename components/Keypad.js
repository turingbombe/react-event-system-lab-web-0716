const React = require('react');

class Keypad extends React.Component{
	constructor(){
		super()
		this.exclaim = this.exclaim.bind(this)
	}

	exclaim(){
		console.log('Entering password...')
	}

	render(){
		return(
			<div>
				<input onKeyUp={this.exclaim} type="password" />
			</div>
		)
	}
}

module.exports = Keypad