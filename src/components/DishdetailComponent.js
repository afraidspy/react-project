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
	
   renderDish(dish) {
        if (dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>             
            );
        }else
            return(
                <div></div>
            );
    }

	/*
	* Return the comments with an author and specific date about dish.
	* @param {object} Array with comments. If array is empty, return a empty d
	*/
	
renderComments(comments){
        console.log("Comentarios");
        console.log(comments);
        if (comments != null){
          const list = comments.map((item) => {
              return (
                  <li>
                    <p>{item.comment}</p>
                    <p>-- { item.author } {item.date}</p>
                  </li>
              );
          });

          return (
              <ul className="unstyleli">
                  <h4>Comentarios</h4>
                  {list}
              </ul>
          );

        }else
            return(
                <div></div>
            );
}
	
	 render() {
      if (this.props.dish != null){
	 	   return (
	 		    <div className="row">	 	
	 			       <div className="col-12 col-md-5 m-1">	
	 	              {this.renderDish(this.props.dish)}
               </div>
               <div className="col-12 col-md-5 m-1"> 
                  {this.renderComments(this.props.dish.comments)}
               </div>
          </div>
	 	  );
      }else
            return(
                <div>----------></div>
            );
      //End if
	 }//End render
}

export default Detail;