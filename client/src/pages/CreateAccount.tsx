import { useState, FormEvent, ChangeEvent } from "react";
import Userdata from "../interfaces/CreateAccount";

import { useNavigate } from "react-router-dom";
import { createUser } from "../api/createuser";
import Auth from "../utils/auth";

import "../assets/styles/CreateAcc.css";

const CreateAccount = () => {
  const [newUser, setnewUser] = useState<Userdata | undefined>({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newUser) {
      const data = await createUser(newUser);
      console.log(data);
      Auth.login(data.token);
      navigate("/search");
    }
  };

  const handleTextChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setnewUser((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  return (
    <div className="create-account">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={newUser?.username || ""}
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={newUser?.password || ""}
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={newUser?.email || ""}
            onChange={handleTextChange}
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
