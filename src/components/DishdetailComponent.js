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
	
	/*
	* Return comments with author and specific date.
	* @param {object} Array with comments. If array is empty, return a empty d
	*/
	
	renderComments(comments){
        if (comments != null){
        	
        	const list = comments.map((item) => {
            	return (
              		<div className ="row">
              			<p>{item.comment}</p>
              			<p>-- { item.author } {item.date}</p>
              		</div>
            	);
        	});

            return (
            	<div className="container">
              		{list}
            	</div>
        	);

        } else
            return(
                <div></div>
            );
	}
	
	 render() {

	 	return (
	 		<div className="row">	 	
	 			<div className="col-12 col-md-5 m-1">	
	 		 		<Card >
                		<CardImg top src={this.props.image} alt={this.props.name} />
                			<CardBody>
                    			<CardTitle>{this.props.name}</CardTitle>
                      			<CardText>{this.props.description}</CardText>
                    		</CardBody>
             		</Card>             
             	</div>
             	<div className="col-12 col-md-5 m-1">
             		<h1>Comments</h1>    
             		{this.renderComments(this.props.comments)}         		
             	</div>
             </div>
	 	);
	 }
}

export default Detail;