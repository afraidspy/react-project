import React, {Component} from 'react'
import {Card, CardImg, CardImgOverLayer,CardText,CardBody, CardTitle} from 'reactstrap';

/**
* Component to show details about a dish
* @Jessica Santizo Galicia
*/
class Detail extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: props.name,
			description: props.description,
			image: props.image
		}

	}


	 render() {

	 	return (
	 		<div clasName ="row">
	 		
	 		 	<Card className="col-12 col-md-5 m-1">
                	<CardImg top src={this.state.image} alt={this.state.name} />
                		<CardBody>
                    		<CardTitle>{this.state.name}</CardTitle>
                      		<CardText>{this.state.description}</CardText>
                    	</CardBody>
             	</Card>
             
             	<div className="comments col-12 col-md-5 m-1">
             		<h1>Comments</h1>
             	</div>

             </div>
	 	);
	 }
}

export default Detail;