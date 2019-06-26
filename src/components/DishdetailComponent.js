import React, {Component} from 'react'
import {Card, CardImg, CardImgOverLayer,CardText,CardBody, CardTitle} from 'reactstrap';

/**
* Component to show details about a dish
* @Jessica Santizo Galicia
*/
class Detail extends Component {
	constructor(props){
		super(props);		
	}
	
	 render() {
	 
	 	return (
	 		<div className="row">	 		
	 		 	<Card className="col-12 col-md-5 m-1">
                	<CardImg top src={this.props.image} alt={this.props.name} />
                		<CardBody>
                    		<CardTitle>{this.props.name}</CardTitle>
                      		<CardText>{this.props.description}</CardText>
                    	</CardBody>
             	</Card>             
             	<div className="col-12 col-md-5 m-1">
             		<h1>Comments</h1>             		
             	</div>
             </div>
	 	);
	 }
}

export default Detail;