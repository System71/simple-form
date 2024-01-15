const Form = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  passwordVerif,
  setPasswordVerif,
  errorMessage,
  setErrorMessage,
  setConfirmation,
}) => {
  const onChange = (event, target) => {
    if (target === "name") {
      setName(event.target.value);
    } else if (target === "email") {
      setEmail(event.target.value);
    } else if (target === "password") {
      setPassword(event.target.value);
    } else if (target === "passwordVerif") {
      setPasswordVerif(event.target.value);
    }
  };

  return (
    <div className="form">
      <h1>Create account</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            name !== "" &&
            email !== "" &&
            password !== "" &&
            passwordVerif !== ""
          ) {
            password !== passwordVerif
              ? setErrorMessage("Les mots de passe ne sont pas identiques")
              : (setErrorMessage(""), setConfirmation(true));
          }
        }}
      >
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Your name"
          onChange={(event) => {
            onChange(event, "name");
          }}
        />
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Your email"
          onChange={(event) => {
            onChange(event, "email");
          }}
        />
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your password"
          onChange={(event) => {
            onChange(event, "password");
          }}
        />
        <span>Confirm your password</span>
        <input
          type="password"
          name="passwordVerif"
          value={passwordVerif}
          placeholder="Confirm your password"
          onChange={(event) => {
            onChange(event, "passwordVerif");
          }}
        />
        {errorMessage}
        <button>Register</button>
      </form>
    </div>
  );
};

export default Form;
