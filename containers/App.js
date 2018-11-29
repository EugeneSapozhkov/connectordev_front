import React, {Component} from 'react'
import {Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap"
import axios from "axios"
import {APIUrl} from "../config"
import {ToastContainer, toast} from 'react-toastify';


class App extends Component {
  constructor(props, context) {
    super(props, context);


    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = e => {
    this.setState({email: e.target.value});
  };

  handlePasswordChange = e => {
    this.setState({password: e.target.value});
  };

  validateField = field => {
    const length = field.length;
    if (length > 6) return 'success';
    else if (length > 0) return 'error';
    return null;
  };

  submit = () => {
    const user = Object.assign({}, this.state.email, this.state.password);

    if (this.state.email && this.state.password) {
      axios.post(`${APIUrl}/users/login`, user)
        .then(res => console.log(res))
        .catch(err => {
          toast.error(err.response.data.message)
        })
    }
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Form>
              <FormGroup
                controlId="formEmail"
                validationState={this.validateField(this.state.email)}
              >
                <ControlLabel>Email:</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.email}
                  placeholder="Enter email"
                  onChange={this.handleEmailChange}
                />
                <FormControl.Feedback/>
              </FormGroup>

              <FormGroup
                controlId="formPassword"
                validationState={this.validateField(this.state.password)}
              >
                <ControlLabel>Password:</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.password}
                  placeholder="Enter password"
                  onChange={this.handlePasswordChange}
                />
              </FormGroup>
            </Form>

            <Button onClick={() => this.submit()}>Login</Button>
          </Col>
        </Row>

        <ToastContainer />
      </Grid>
    )
  }
}

export default App;