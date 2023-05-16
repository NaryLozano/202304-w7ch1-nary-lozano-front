import { useState } from "react";

const LoginForm = (): JSX.Element => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        className="form__user"
        type="text"
        placeholder="Username"
        id="username"
        onChange={onChangeLogin}
      />
      <input
        className="form__password"
        type="password"
        placeholder="Password"
        id="password"
        onChange={onChangeLogin}
      />
      <button className="form__button">Login</button>
    </form>
  );
};

export default LoginForm;
