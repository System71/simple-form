const Confirmation = ({ name, email, password, setConfirmation }) => {
  return (
    <div className="confirmation">
      <h1>Results</h1>
      <div className="info">
        <span>Name : {name}</span>
        <span>Email : {email}</span>
        <span>Password : {password}</span>
      </div>
      <button
        onClick={() => {
          setConfirmation(false);
        }}
      >
        Editer informations
      </button>
    </div>
  );
};

export default Confirmation;
