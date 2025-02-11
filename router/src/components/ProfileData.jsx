import ContentData from "./ContentData";
import MyContext from "./MyContext";

const ProfileData = () => {
  return (
    <MyContext.Consumer>
      {(data) => {
        return (
          <div>
            <p>
              <a href="#collapseExample" data-toggle="collapse" className="btn btn-primary">
                Informations sur {data.name}
              </a>
            </p>

            <ContentData />
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};
export default ProfileData;
