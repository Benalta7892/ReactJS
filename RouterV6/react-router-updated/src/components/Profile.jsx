import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState({});
  const params = useParams();
  console.log(data);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((resp) => {
      setData(resp.data);
    });
  }, [params.id]);

  const { name, email, phone } = data;

  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <strong>Nom</strong> : {name}
      </li>
      <li className="list-group-item">
        <strong>Email</strong> : {email}
      </li>
      <li className="list-group-item">
        <strong>Tél</strong> : {phone}
      </li>
    </ul>
  );
};
export default Profile;
