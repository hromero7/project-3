import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from 'reactstrap';
import { logout } from "../../actions/authActions";
import PropTypes from 'prop-types';

export class Logout extends Component {
   static propTypes = {
       logout: PropTypes.func.isRequired
   }
    
    render() {
        return (
            <div>
                <Button
          className="btn btn-outline-danger my-2 my-sm-0"
          onClick={this.props.logout}
          href="#"
          style={{ position:"absolute", right:"10px"}}
        >
          Logout
        </Button>
            </div>
        )
    }
}

export default connect(null, { logout })(Logout);