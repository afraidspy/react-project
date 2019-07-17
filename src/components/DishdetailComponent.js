import React, {Component} from 'react';
import CommentForm from './CommentForm';
import { Card, CardImg, CardImgOverlay,
    CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

 function RenderMenuItem ({dish, onClick}) {
    return (
       <Card>
        <Link to={`/menu/${dish.id}`} >
          <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
       </Link>
      </Card>
    );
  }

/**
* Component to show details about a dish
* @author Jessica Santizo Galicia
*/
   function RenderDish({dish}) {
            return(
                 <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                  </Card>             
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
                <div>
                  <h4>Comments</h4>
                  <ul className="list-unstyled">
                    {list}
                  </ul>
                     <CommentForm />
                </div>
          );

        }else
            return(
                <div></div>
            );
}
	
  const DishDetail = (props) => {
    if (props.dish != null){
          return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />

                    </div>
                </div>
                </div>
            );
    }else
      return (
        <div></div>
      );
   }//End render



export default DishDetail;