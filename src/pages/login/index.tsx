import "../login/styles.sass";

const Login = () => {
  return (
    <div className="login-container">
      <img src={"/images/rememberIt.png"} className="logo" alt="Logo" />
      <form className="form">
        <label className="label">
          E-Mail
          <input type="email" className="input" required />
        </label>
        <label className="label">
          Password
          <input type="password" className="input" required />
        </label>
        <div className="form-actions">
          <div className="checkbox-label">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="forgot-password">
              Remember Me
            </label>
          </div>
          <a href="#" className="">
            Forgot password?
          </a>
        </div>
        <button type="submit">Login</button>
        <p className="signup-text">
          Don’t have an account?{" "}
          <a href="/signup" className="signup-link">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
