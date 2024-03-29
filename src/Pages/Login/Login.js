import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import svg from "../../assest/logo/login.webp";
import { AuthContext } from "../../Context/Authprovider/Authprovider";
const Login = () => {
  const { login, providerLogin } = useContext(AuthContext);
  // const location = useLocation();
  const navigate = useNavigate();
  const [signUpError, setSignUPError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
	  navigate("/");
  };

  // const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email,password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        setLoginUserEmail(event.email);
        setSignUPError("");
        console.log(currentUser);
		navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };
  return (
    <div className="hero my-12">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left mx-auto w-3/4">
          <img src={svg} alt="" />
        </div>
        <div className="card py-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-2xl  lg:text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto"
          >
            <div className="w-10">
              <img
                className=" px-2 image-fluid btn-image"
                src="https://img.icons8.com/color/344/google-logo.png"
                alt=""
              />
            </div>

            <p className="fw-bold">Google SignIn</p>
          </button>
          {signUpError && (
            <p className="text-red-600 py-5 text-center">{signUpError}</p>
          )}
          <div>
            <p className="text-center">
              Have an account?{" "}
              <Link to="/signup" className="text-xl  text-orange-600 font-bold">
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
