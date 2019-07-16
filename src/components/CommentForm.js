import React, {Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {  Button, Row, Col, Label, Input, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Form, FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Comment extends Component {

	construct(props){
		this.state = {
  			isModalOpen: false
		};

  		this.handleSubmit = this.handleSubmit.bind(this);
  	  	this.toggleModal = this.toggleModal.bind(this);
        
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
    
    	return( <div className="row row-content">
            <div className="col-12">
				<Button online onClick={this.toggleModal} >
                    <span className="fa fa-sign-in fa-lg"></span>
                    Login
                </Button>	
                This is a comment
            </div>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>    
                      <Form onSubmit={this.handleComment}>
                      		<FormGroup>
                                <Label htmlFor="username">Rating</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">Your name</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>cm
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
             </Modal>

         </div>
        );
    }
}