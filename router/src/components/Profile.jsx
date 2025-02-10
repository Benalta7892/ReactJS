import { Component } from "react";
import profileImg from "../profil.png";

class Profile extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const data = this.props.match.params.profileId;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((d) => this.setState({ data: d[data] }));
  }

  render() {
    const { name, email, phone } = this.state.data;

    return (
      <div className="container mt-3">
        <h1>Profile</h1>
        <img src={profileImg} alt="profile" />

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
      </div>
    );
  }
}

export default Profile;
