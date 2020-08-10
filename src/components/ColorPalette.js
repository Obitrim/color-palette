import Color from "./Color";
import "../assets/styles/colorPalette.css";
import React, {Component} from "react";

export default class ColorPalette extends Component {
	constructor(props){
		super(props);
		this.state = {
			colors: [
				"rgb(0,0,0)",
				"rgb(255,0,0)",
				"rgb(0,255,0)",
				"rgb(128,0,0)",
				"rgb(0,0,255)",
				"rgb(0,128,0)",
				"rgb(0,0,128)",
				"rgb(139,0,0)",
				"rgb(255,140,0)",
				"rgb(255,165,0)",
				"rgb(255,215,0)",
				"rgb(255,255,0)",
				"rgb(0,255,255)",
				"rgb(255,0,255)",
				"rgb(128,128,0)",
				"rgb(0,128,128)",
				"rgb(128,0,128)",
				"rgb(128,128,0)",
				"rgb(124,252,0)",
				"rgb(127,255,0)",
				"rgb(107,142,35)",
				"rgb(173,255,47)",
				"rgb(255, 0, 255)",
				"rgb(255, 255, 0)",
				"rgb(240,230,140)",
				"rgb(192,192,192)",
				"rgb(255,255,255)",
				"rgb(128,128,128)",
			],

			headerTitleBg: "#eaeaea"
		}
	}

	render(){
		const renderedColorTemplate = this.state.colors.map((color, index) => {
			return (
				<Color
					key={index} 
					value={color}
					onColorChange={this.changeColorAtIndex(index)}
					/>
			)
		});

		return (
			<div className="color-pallete">
				<header className="pallete-header">
					<h1 className="pallete-header__heading pallete-header__heading--text-center">Color Pallete</h1>
					<p className="pallete-header__instruction" style={{backgroundColor: this.state.headerTitleBg}}>
						Click color card to change Color
					</p>
				</header>
				<div className="color-pallete__colors">{renderedColorTemplate}</div>
			</div>
		)
	}

	changeColorAtIndex = (colorIndex) => {
		return () => {
			let colors = [...this.state.colors];
			let newColor = `rgb(${this.getRandomNumberInRange()}, ${this.getRandomNumberInRange()}, ${this.getRandomNumberInRange()})`;
			colors.splice(colorIndex, 1, newColor);
			this.setState({colors});
		}
	}

	getRandomNumberInRange = (min = 0, max = 255) => {
		return Math.floor(Math.random() * (max - min) + min);
	}

	changeInstructionBgColor = () => {
		let newColor = `rgb(${this.getRandomNumberInRange()}, ${this.getRandomNumberInRange()}, ${this.getRandomNumberInRange()})`;
		this.setState({headerTitleBg: newColor})
	}

	componentDidMount(){
		setInterval(this.changeInstructionBgColor, 2000);
	}
}