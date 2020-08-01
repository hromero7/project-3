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
import { login } from "../../actions/authActions";

class LoginModal extends Component {
  state = {
    modal: false,
    username: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error,isAuthenticated } = this.props;
    if(error !== prevProps.error) {
        //check for register error
        if(error.id === 'LOGIN_FAIL') {
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

    const { username, password } = this.state;

    const user ={ 
        username,
        password
    }

    this.props.login(user)
    
  };

  render() {
    return (
      <div>
        <Button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={this.toggle}
          href="#"
          style={{ position:"absolute", right:"105px", top:"18px"}}
          
        >
          Login
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
              { this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
            <form onSubmit={this.onSubmit} className="signup-form">
              
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
                Login
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

export default connect(mapStateToProps, { login })(LoginModal);
