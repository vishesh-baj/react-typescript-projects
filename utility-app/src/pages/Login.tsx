const Login = () => {
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-2/3 h-screen "></div>
        <div className="w-1/3 h-screen flex justify-center items-center">
          <div className="w-full mx-10 rounded-2xl drop-shadow-lg bg-white  h-auto p-8  flex flex-col gap-4 hover:h-3/4 hover:drop-shadow-xl hover:shadow-primary transition ease-in-out duration-100">
            <h1 className="text-6xl font-extrabold text-primary">Login</h1>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Enter Email</span>
              </label>
              <input
                className="input input-primary"
                type=" "
                name="email"
                id=""
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Enter Password</span>
              </label>
              <input
                className="input input-primary"
                type=" "
                name="password"
                id=""
              />
              <label className="label">
                <span className="label-text-alt text-primary cursor-pointer">
                  Forget Password?
                </span>
              </label>
            </div>
            <div>
              <button className="btn btn-primary min-w-full">Login</button>
              <label className="label flex justify-center">
                <span className="label-text">
                  Not having an acount?{" "}
                  <span className="text-primary cursor-pointer">Sign up</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
