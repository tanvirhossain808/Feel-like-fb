import { FaCircleQuestion } from "react-icons/fa6";
import { GiExitDoor } from "react-icons/gi";

import "./SignupPage.css";
export const SignUpPage = ({ setSignUpPopUp }) => {
  const handSignUpForm = () => {};
  return (
    <>
      <div>
        <div className="signUpSection">
          <div className="signupContainer">
            <div className="signupTitle">
              <div className="exitFromSignup">
                <h1>Sign Up</h1>
                <span onClick={() => setSignUpPopUp(false)}>
                  <GiExitDoor />
                </span>
              </div>
              <p>It is quick and easy.</p>
            </div>
            <div className="line"></div>
            <div className="signUpForm">
              <form onSubmit={handSignUpForm}>
                <div className="creatorName">
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Sure Name" />
                </div>
                <div className="otherInfo">
                  <div>
                    <input
                      className="nameAndPass"
                      type="text"
                      placeholder="Mobile number or email address"
                    />
                  </div>
                  <div>
                    <input
                      className="nameAndPass"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <span className="inputTitle">
                    Date <FaCircleQuestion />
                  </span>
                  <div className="signUpdate">
                    <input type="date" />
                  </div>
                </div>
                <span className="inputTitle">
                  Gender <FaCircleQuestion />
                </span>
                <div className="genderInfo">
                  <span className="genderBorder">
                    <span>Female</span>
                    <input type="radio" name="gender" value="female" />
                  </span>
                  <span className="genderBorder">
                    <span>Male</span>
                    <input type="radio" name="gender" value="male" />
                  </span>
                  <span className="genderBorder">
                    <span>Custom</span>
                    <input type="radio" name="gender" value="custom" />
                  </span>
                </div>
                <span className="submitBtn">
                  <button type="submit" className="signupBtn">
                    Signup
                  </button>
                </span>
              </form>
              <div className="toggleToCreateAccount">
                {/* <button>
              <NavLink>Create account</NavLink>
            </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
