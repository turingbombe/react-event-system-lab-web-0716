const React = require('react');

class EyesOnMe extends React.Component{
	constructor() {
    	super();
    	this.state = {
     		focused: 'blur'
    	}
    }

	blocus(){

		if(this.state.focused == 'blur'){
			console.log('Hey! Eyes on me!')
			this.setState({
				focused: 'focus'
			})			
		}
		else{
			console.log('Good!')
			this.setState({
				focused: 'blur'
			})			
		}
	}


	render(){
		return(
			<div>
				<button onClick = {this.blocus.bind(this)} >{this.state.focused}</button>
			</div>
		)
	}
}

module.exports = EyesOnMe