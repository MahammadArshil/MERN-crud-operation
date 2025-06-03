import axios from "axios";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Home = ({ data, getData}) => {
  useEffect(() => {
    getData()
  }, []);

  const handleDelete = (id)=>{
    axios
    .delete(`http://localhost:1234/${id}`)
    .then((res)=>{
      // console.log("Deleted.",res);
      getData();
      toast.success("Data Deleted.");
    })
    .catch((err)=>{
      console.log(`Error: ${err}`);
      toast.error("Data Deleted.");
    })
  }

  return (
    <div className="home-div">
      <div className="data-box">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Profession</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
          {
            data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.profession}</td>
                  <td>{item.experience}</td>
                  <td>
                    <Link to={'/edit'} state={item}><button className="data-edit-button"><FaEdit /></button></Link>
                    <button onClick={()=>handleDelete(item._id)}
                      className="data-delete-button"><FaTrash /></button>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  );
}

export default Home;
