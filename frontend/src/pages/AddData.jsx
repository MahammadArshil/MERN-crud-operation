import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const AddData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");

  const navigate = useNavigate();

  const handleAddData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:1234/add/", { name: name, email: email, password: password, profession: profession, experience: experience })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Data Added Successfully.");
          navigate('/');
        }
      })
      .catch((err)=>{
        console.log("Error:",err);
        toast.error("Data can't Added.");
      })
  }

  return (
    <div>
      <div className="form-box">
        <form className="my-form" onSubmit={handleAddData}>
          <h1>Data Form</h1>
          <div>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)}
              type="text" placeholder="John Doe" />
          </div>
          <div>
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
              type="email" placeholder="example@gmail.com" />
          </div>
          <div>
            <label>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}
              type="password" placeholder="******" />
          </div>
          <div>
            <label>Profession</label>
            <input value={profession} onChange={(e) => setProfession(e.target.value)}
              type="text" placeholder="Web Developer" />
          </div>
          <div>
            <label>Experience</label>
            <input value={experience} onChange={(e) => setExperience(e.target.value)}
              type="number" placeholder="2" />
          </div>
          <div>
            <button type='submit' className="submit-button">Submit</button>
            <button type='button' onClick={() => { navigate("/") }} className="cancel-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddData;
