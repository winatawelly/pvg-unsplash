import "./style.css";

interface Props {
  name: string;
}

const ProfilePicture = ({ name }: Props) => {
  return (
    <div className="profile-picture-container">
      <div className="profile-picture">{name[0]}</div>
      <div className="profile-picture-info ms-2">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProfilePicture;
