import { Component } from "react";
import ProfileData from "./ProfileData";
import lisa from "../lisa.jpg";
import MyContext from "./MyContext";

class Profile extends Component {
  render() {
    let value = this.context;
    console.log(value);

    return (
      <div className="container">
        <h1>{this.props.info.name}</h1>
        <p>Age : {value.age} ans</p>
        <img src={lisa} alt="lisa" className="img-thumbnail mb-3" width="250px" />

        <ProfileData welcome={this.props.info} />
      </div>
    );
  }
}

Profile.contextType = MyContext;

export default Profile;
