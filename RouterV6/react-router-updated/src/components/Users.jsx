import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const users = ["Roger", "Stan", "Francine", "Steve", "Hayley", "Klaus"];

  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get("name") || "";

  const handleSearch = (e) => {
    const name = e.target.value;

    if (name) {
      setSearchParams({
        name: name,
      });
    } else {
      setSearchParams({});
    }
  };

  const filteredUsers = users.filter((user) => user.toLowerCase().includes(searchName.toLowerCase()));

  return (
    <div className="container mt-4">
      <h1>Profile</h1>

      <Outlet />

      <hr />
      <input type="text" value={searchName} onChange={handleSearch} />

      <ul>
        {filteredUsers.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
    </div>
  );
};
export default Users;
