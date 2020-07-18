import React from "react";

const Signup = () => {
    return (
        <form className="signup-form">
        <div className="form-row">
        <div class="form-group col-md-6">
          <label for="inputFirstName">First Name</label>
          <input type="text" class="form-control" id="inputFirstName" placeholder="John"/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputLastName">Last Name</label>
          <input type="text" class="form-control" id="inputLastName" placeholder="Doe"/>
        </div>
        </div>
        <div class="form-group">
          <label for="inputUsername">Username</label>
          <input type="text" class="form-control" id="inputUsername" placeholder="johndoe01"/>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="johndoe@fvg.com"/>
          </div>
          <div class="form-group col-md-12">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4"/>
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary signup-btn">Sign in</button>
      </form>

    )
}

export default Signup;