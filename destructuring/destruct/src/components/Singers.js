// const Users = ({ name, age }) => {
//   console.log(name, age);
//   return (
//     <div>
//       <p>Chanteur : </p>
//     </div>
//   );
// };

// export default Users;

// // Dans une class on ne peut pas utiliser "props" de la même maniere, on utilise "this" qui peut acceder a "props"
import { Component } from "react";
class Users extends Component {
  render() {
    return (
      <div>
        <p>
          Chanteur : {this.props.name} {this.props.age}
        </p>
      </div>
    );
  }
}

export default Users;
