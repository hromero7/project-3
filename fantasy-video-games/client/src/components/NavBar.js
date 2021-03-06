import React, { useState, useEffect } from 'react';
import logo from "../pages/assets/fvg2.png";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from "./Login";
import Signup from "./Signup";
import RegisterModal from "./auth/RegisterModal";
import Logout from './auth/Logout';
import LoginModal from "./auth/LoginModal";
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';



function getAuth(user){
  if(user){
    return (
       <div className="row">
         <h4 className="greeting" style={{ color:"white", marginTop: "4px", marginLeft:"28px"}}>Welcome {user.username}!</h4>
         <Logout />
        </div> 
       )
  } else {
    return(
      <div>
<LoginModal/>
 <RegisterModal/>
      </div>
 
    )
  }

}  


const NavBar = (props) => {
  // const [userInfo, setUserInfo] = useState({
  //   username: "",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   balance: "",
  //   description: "",
  //   badges: "",
  //   emotes: "",
  //   profilePic: "",
  // });

  // useEffect(() => {
  //   setUserInfo({
  //     username: props.auth.user.username,
  //     firstName: props.auth.user.first,
  //     lastName: props.auth.user.last,
  //     email: props.auth.user.email,
  //     balance: props.auth.user.balance,
  //     description: props.auth.user.description,
  //     badges: props.auth.user.badges,
  //     emotes: props.auth.user.emotes,
  //     profilePic: props.auth.user.profile_pic
  //   });
  // },[getAuth]);

  console.log("navar prpps are", props);

  let u  =  JSON.parse( localStorage.getItem('user') )
  console.log(u)
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);
      
      

      {/* </form>
      
    </ul>
  </div>
</nav> */}
//  <LoginModal
  useEffect(() => {
    getNumbers();
    
  }, []);
  return (
  // <UserContext.Provider value={userInfo}>
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <a className='navbar-brand' href='/'>
          <img src={logo} width='50px' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <Link to='/'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
            </Link>
            <Link to='/league'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  League
                </a>
              </li>
            </Link>
            
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Streams
              </a>
              <div
                class='dropdown-menu bg-dark'
                aria-labelledby='navbarDropdown'
              >
                <a class='dropdown-item text-success' href='/codstream'>
                  Call Of Duty
                </a>
                <a class='dropdown-item text-success' href='/fortnitestream'>
                  Fortnite
                </a>
                <a class='dropdown-item text-success' href='/nbastream'>
                  NBA 2k
                </a>
              </div>
              </li>
              <Link to='/shop'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Shop
                  </a>
                </li>
              </Link>
              <Link to='/cart'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <ion-icon name='basket'></ion-icon>Cart
                  </a>
                </li>
              </Link>
              <Link to='/profile'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Profile
                  </a>
                </li>
              </Link>
              <form className='form-inline my-2 my-lg-0'>
              
                {getAuth(u)}
              </form>
          </ul>
        </div>
      </nav>
      
    </div> 

    // </UserContext.Provider>
      // </LoginModal> 
//  <SignupModal
//       </LoginModal>
//       <SignupModal
//         visible={signupVisible}
//         width='500'
//         height='500'
//         effect='fadeInUp'
//         onClickAway={() => closeSignup()}
//       >
//         <div className='card' style={{ width: '500px', height: '500px' }}>
//           <div className='card-body'>
//             <h5 className='card-title'>Sign Up</h5>
//             <div className='card-text'>
//               <Signup />
//             </div>
//           </div>
//         </div>
      // </SignupModal> 

  );
};
  
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
  auth: state.auth
});
  
export default connect(mapStateToProps, { getNumbers })(NavBar);
