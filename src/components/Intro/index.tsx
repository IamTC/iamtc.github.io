import ProfileImage from "../ProfileImage";

import Styles from "./intro.module.scss";

function Intro() {
  return (
    <div className={Styles.IntroContainer}>
      <div class={Styles.title}>
        <h1 class={Styles.name}>Thiwanka Dissanayaka</h1>
        <h2 class={Styles.occupation}>Software Engineer</h2>
      </div>

      <div class="prof-image">
        <ProfileImage path="assets/meRelit.png" />
      </div>
    </div>
  );
}

export default Intro;
