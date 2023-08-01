import { useState } from "react";
import validation from "../validation";

const Form = ({login}) => {

  const [userData, setUserData] = useState({
    email: "",
    password: "", 
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value});
    setErrors(validation({...userData, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const errors = validation(userData);

    if(Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    login(userData);

  };

  return (
    <form>

      <label>Email: </label>
      <input 
        onChange={handleChange} 
        value={userData.email}
        type="text" 
        name="email"  
        placeholder="pontuemail@ejemplo.com"
      />

      {errors.e1 && <p>{errors.e1}</p>}
      {errors.e2 && <p>{errors.e2}</p>} 
      {errors.e3 && <p>{errors.e3}</p>}

      <br />

      <label>Contraseña: </label>
      <input
        onChange={handleChange}
        value={userData.password} 
        type="text"
        name="password"  
        placeholder="pon algo misterioso" 
      />

      {errors.p1 && <p>{errors.p1}</p>}
      {errors.p2 && <p>{errors.p2}</p>}
      {errors.p3 && <p>{errors.p3}</p>}

      <br />

      <button onClick={handleSubmit}>Ingresar</button>

    </form>
  );
};

export default Form;