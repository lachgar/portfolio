import React from "react";
import PropTypes from "prop-types";
import photo from "../assets/moi.jpg";

function ProfileImage({ size, shape, className, alt, name, socialProfile, showName, showSocialProfile }) {

  const handleClick = () => {
    // Ajouter une fonctionnalité pour changer la photo ici
  }

  return (
    <div className={`text-center mb-4 ${className}`}>
      <img
        src={photo}
        alt={alt}
        className={`rounded-${shape} profile-img`}
        style={{width: size, height: size, cursor: "pointer"}}
        onClick={handleClick}
      />
      {showName && <div className="mt-2">{name}</div>}
      {showSocialProfile && <div className="mt-2">{socialProfile}</div>}
    </div>
  );
}

ProfileImage.defaultProps = {
  size: "150px",
  shape: "circle",
  className: "",
  alt: "profile photo",
  name: "",
  socialProfile: "",
  showName: true,
  showSocialProfile: false
}

ProfileImage.propTypes = {
  size: PropTypes.string,
  shape: PropTypes.oneOf(["circle", "square"]),
  className: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  socialProfile: PropTypes.string,
  showName: PropTypes.bool,
  showSocialProfile: PropTypes.bool
}

export default ProfileImage;
