import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="container mt-4">
      <h1>Profile</h1>

      <Outlet />
    </div>
  );
};
export default Users;
