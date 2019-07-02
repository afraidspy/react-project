import React, {Component} from 'react'
import {Card, CardImg, CardImgOverLayer, CardText,CardBody, CardTitle} from 'reactstrap';

/**
* Component to show details about a dish
* @author Jessica Santizo Galicia
*/
   function RenderDish({dish}) {
            return(
                <div className ="col-12 col-md-5 m-1">
                 <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                  </Card>             
                </div>
            );
        
    }

	/*
	* Return the comments with an author and specific date about dish.
	* @param {object} Array with comments. If array is empty, return a empty d
	*/	
function RenderComments({comments}){
        if (comments != null){
          const list = comments.map((comment) => {
              return (
              //Showing each comment 
                  <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- { comment.author }  , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                  </li>
              );
          });

          return (
                  <ul className="list-unstyled">
                    {list}
                  </ul>
          );

        }else
            return(
                <div></div>
            );
}
	
  const DishDetail = (props) => {
    if (props.dish != null){
       return (
          <div className="row">   
                  <RenderDish dish = {props.dish} />
                  <RenderComments comments = {props.dish.comments} />
          </div>
      );
    }else
      return (
        <div></div>
      );
   }//End render



export default DishDetail;