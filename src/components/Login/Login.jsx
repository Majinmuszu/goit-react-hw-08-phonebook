import React from "react";

const Login = () => {
    // const [loginUserData] = useLoginUserMutation();
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   const formData = new FormData(e.currentTarget);
    //   const name = formData.get("name");
    //   const body = { name };
  
    //   loginUserData(body).then(({ data }) => {
    //     dispatch(setUserId(data));
    //   });
    //   navigate("/contacts", { replace: true });
    // };
  return (
    <div>
        <h1>Login</h1>
      <form >
        <label>
          {/* ID: <input name="id" type="text" defaultValue="1" /> */}
          name: <input name="name" type="text" defaultValue="Fake User" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
