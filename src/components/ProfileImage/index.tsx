import Styles from "./profile-image.module.scss";

function ProfileImage({ path }) {
  return (
    <div className={Styles.ProfileImageWrapper}>
      <img src={path} alt="" srcset="" />
    </div>
  );
}

export default ProfileImage;
