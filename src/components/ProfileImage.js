// ProfileImage.js

import React from "react";
import photo from"../assets/moi.jpg";

function ProfileImage() {
  return (
    <div className="text-center mb-4">
      <img
        src={photo} // Remplacez par le chemin de votre propre photo de profil
        alt="photo"
        className="rounded-circle profile-img"
      />
    </div>
  );
}

export default ProfileImage;
