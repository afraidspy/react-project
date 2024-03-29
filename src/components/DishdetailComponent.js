import React, {Component} from 'react';
//import CommentForm from './CommentForm';
import { Card, CardImg, CardImgOverlay,
    CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {  Button, Row, Col, Label, Input, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Form, FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
          author: false,
          firstname: '',
          touched: {
                author: false,
                
            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

     handleComment(event) {
        this.toggleModal();
        /*alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);*/
        event.preventDefault();

    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        //alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();

        this.toggleModal();
        this.props.addComment(this.props.dishId,);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
    
      return( 
        <div className="col-12 col-md-5">            
              <Row className="form-group">
                    <Col md={{size:10, offset: 2}}>
                      <Button online onClick={this.toggleModal} className="btn btn-outline-secondary">
                          <span className="fa fa-edit"></span>
                             Submit comment
                      </Button>
                  </Col>
              </Row>
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>   
                    <div className="col-12"> 
                      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                             <Row className="form-group">
                                <Label htmlFor="username">Rating</Label>   
                                  <Control.select model=".rating" name="contactType"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>                             
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="username">Your name</Label>
                                 <Control.text model=".author" id="author" name="author"
                                        placeholder="Your name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message"> Comment</Label>
                                 <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                     </div>
                    </ModalBody>
                </Modal>
            
          </div>
        );
    }
}



 function RenderMenuItem ({dish, onClick}) {
    return (
       <Card>
        <Link to={`/menu/${dish.id}`} >
           <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
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
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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
function RenderComments({comments, addComment, dishId}){
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
                     <CommentForm  dishId={dishId} addComment={addComment}/>
                </div>
          );

        }else
            return(
                <div></div>
            );
}
  
  const DishDetail = (props) => {
     if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
      }
      else if (props.errMess) {
          return(
            <div className="container">
              <div className="row">            
                  <h4>{props.errMess}</h4>
                  </div>
              </div>
            );
       }
       else if (props.dish != null){
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
                        <RenderComments comments={props.comments}
                          addComment={props.addComment}
                          dishId={props.dish.id}
                        />
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