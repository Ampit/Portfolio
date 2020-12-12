import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// testing this

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    if (val.length > 0) valid = false;
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    if (val === '') valid = false;
  });

  return valid;
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, subject, message } = this.state;

      // Set template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      emailjs.send(
        'service_z2c5nzh',
        'template_01wfmcr',
        templateParams,
        'user_kEmPtBzvpyjbzvfwo3nJ8'
      );

      /* console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `); */

      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      // console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      this.toastifyFail();
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { formErrors } = this.state;

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  // Function to reset form
  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  toastifySuccess = () => {
    toast.success('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  };

  toastifyFail = () => {
    toast.error('Form failed to send!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  };

  render() {
    const { formErrors, name, email, subject, message } = this.state;

    return (
      <Container>
        <Row className="contact-row-style">
          <Col lg={6} sm={12}>
            <Form id="contact-form" noValidate onSubmit={this.handleSubmit}>
              <Form.Group controlId="nameInput">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={name}
                  placeholder="Name"
                />
              </Form.Group>
              {formErrors.name.length > 0 && <span className="text-danger">{formErrors.name}</span>}

              <Form.Group controlId="emailInput">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  value={email}
                  placeholder="name@example.com"
                />
              </Form.Group>
              {formErrors.email.length > 0 && (
                <span className="text-danger">{formErrors.email}</span>
              )}

              <Form.Group controlId="subjectInput">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  onChange={this.handleChange}
                  value={subject}
                  placeholder="Subject"
                />
              </Form.Group>
              {formErrors.subject.length > 0 && (
                <span className="text-danger">{formErrors.subject}</span>
              )}

              <Form.Group controlId="Textarea">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  onChange={this.handleChange}
                  value={message}
                  rows={3}
                />
              </Form.Group>
              {formErrors.message.length > 0 && (
                <span className="text-danger">{formErrors.message}</span>
              )}

              <Button className="cta-btn cta-btn--submit" type="submit">
                Send Message
              </Button>
            </Form>
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactForm;
