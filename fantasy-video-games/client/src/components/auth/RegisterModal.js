import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";

class RegisterModal extends Component {
  state = {
    modal: false,
    first: "",
    last: "",
    username: "",
    email: "",
    password: "",
    balance: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error,isAuthenticated } = this.props;
    if(error !== prevProps.error) {
        //check for register error
        if(error.id === 'REGISTER_FAIL') {
            this.setState({ msg: error.msg.msg });
        } else {
            this.setState({ msg: null});
        }
    }

    if(this.state.modal) {
        if(isAuthenticated) {
            this.toggle();
        }
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { first, last, username, email, password } = this.state;

    //create user obj
    const newUser = {
        first,
        last,
        username,
        email,
        password
    };

    //attempt to register
    this.props.register(newUser);

    
  };

  render() {
    return (
      <div>
        <Button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={this.toggle}
          href="#"
          style={{ position:"absolute", right:"10px", top:"18px"}}
        >
          Sign Up
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
          <ModalBody>
              { this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
            <form onSubmit={this.onSubmit} className="signup-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="first">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first"
                    name="first"
                    placeholder="John"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="last">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last"
                    name="last"
                    placeholder="Doe"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="johndoe01"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="johndoe@fvg.com"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <button type="submit" class="btn btn-primary signup-btn" block>
                Register
              </button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register })(RegisterModal);
