import { Component } from "react";
import ProfileData from "./ProfileData";
import lisa from "../lisa.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.info.name}</h1>
        <img src={lisa} alt="lisa" className="img-thumbnail mb-3" width="250px" />

        <ProfileData welcome={this.props.info} />
      </div>
    );
  }
}

export default Profile;
