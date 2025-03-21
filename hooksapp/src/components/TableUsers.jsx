import { useDeferredValue } from "react";

const TableUsers = ({ dataArray }) => {
  if (dataArray.length > 7) {
    return new Error();
  }

  const deferredValue = useDeferredValue(dataArray);

  return (
    <table id="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Nom Utilisateur</th>
          <th>Email</th>
          <th>Adresse</th>
        </tr>
      </thead>
      <tbody>
        {/* {notification && (
          <tr>
            <td colSpan={4} style={{ color: "red" }}>
              Veuillez patienter...
            </td>
          </tr>
        )} */}

        {deferredValue.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street}
                {user.address.suite}
                {user.address.city}
                {user.address.zipcode}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TableUsers;

// Table usefetch destructuring

// const TableUsers = ({ dataArray }) => {
//   return (
//     <table id="table">
//       <thead>
//         <tr>
//           <th>Nom</th>
//           <th>Nom Utilisateur</th>
//           <th>Email</th>
//           <th>Adresse</th>
//         </tr>
//       </thead>
//       <tbody>
//         {dataArray.map(({ id, name, username, email, address }) => {
//           return (
//             <tr key={id}>
//               <td>{name}</td>
//               <td>{username}</td>
//               <td>{email}</td>
//               <td>
//                 {address.street}
//                 {address.suite}
//                 {address.city}
//                 {address.zipcode}
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };
// export default TableUsers;
