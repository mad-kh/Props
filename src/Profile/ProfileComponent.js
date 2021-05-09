import React from "react";
import propTypes from "prop-types";
const ProfileComponent = (props) => {
  console.log(props);
  const { FullName, bio, profession, children, handelName } = props;
  return (
    <div>
      {handelName(FullName)}
      <h1 style={{ color: "red", fontFamily: "cursive" }}> {FullName}</h1>
      {children}
      <div style={{ background: "beige", margin: "20" }}>
        <p>{bio}</p>
      </div>
      <div>{profession}</div>
    </div>
  );
};

ProfileComponent.propTypes = {
  FullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  handelName: propTypes.func,
};

ProfileComponent.defaultProps = {
  FullName: "this is the name of the physicist ",
};
export default ProfileComponent;
