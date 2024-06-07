import Styles from "./profile-image.module.scss";

function ProfileImage({ path }) {
  return (
    <div className={Styles.ProfileImageWrapper}>
      <img src={path} alt="" srcset="" />
      {/* <div className={`${Styles.Circle} ${Styles.LeftTop}`}></div>
      <div className={`${Styles.Circle} ${Styles.LeftBottom}`}></div>
      <div className={`${Styles.Circle} ${Styles.Cutout}`}></div> */}
    </div>
  );
}

export default ProfileImage;
