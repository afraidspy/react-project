import React, {Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {  Button, Row, Col, Label, Input, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Form, FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Comment extends Component {

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
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
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

export default Comment;