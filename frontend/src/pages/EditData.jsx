import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const EditData = ({ getData }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profession, setProfession] = useState("");
    const [experience, setExperience] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
        setName(location.state.name);
        setEmail(location.state.email);
        setPassword(location.state.password);
        setProfession(location.state.profession);
        setExperience(location.state.experience);
    }, [location.state])

    const handleEditData = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:1234/edit/${location.state._id}`, { name: name, email: email, password: password, profession: profession, experience: experience })
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Data edited Successfully.");
                    navigate('/');
                }
            })
            .catch((err) => {
                console.log("Error:", err);
                toast.error("Data can't Edit.");
            })
    }

    return (
        <div>
            <div className="form-box">
                <form className="my-form" onSubmit={handleEditData}>
                    <h1>Edit Data</h1>
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
                        <button type='submit' className="submit-button">Update</button>
                        <button type='button' onClick={() => { navigate("/") }} className="cancel-button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditData;
