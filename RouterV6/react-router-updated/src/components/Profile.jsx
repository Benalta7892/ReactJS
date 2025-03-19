import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();

  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">ID Utilisateur : {params.id}</li>
    </ul>
  );
};
export default Profile;
