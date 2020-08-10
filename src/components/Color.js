import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Color extends Component {

	styles = {
		width: "100%",
		height: "220px"
	}

	render(){
		return (
			<div  className="color-card">
				<div className="color-card__color" 
					style={{...this.styles, backgroundColor: this.props.value }} 
					onClick={this.props.onColorChange}
					>
				</div>
				<div className="color-card__text color-card__text--center">
					{this.props.value}
				</div>
			</div>
		)
	}
}

Color.propTypes = {
	value: PropTypes.string,
	onColorChange: PropTypes.func
}

Color.defaultProps = {
	value: "black"
}