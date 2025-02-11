import ContentData from "./ContentData";

const ProfileData = (props) => {
  console.log(props);

  return (
    <div>
      <p>
        <a href="#collapseExample" data-toggle="collapse" className="btn btn-primary">
          Informations sur {props.welcome.name} ?
        </a>
      </p>

      <ContentData />
    </div>
  );
};
export default ProfileData;
