import React from 'react';
import '../styles/ProfileBadge.css';

const ProfileBadge = ({ name, title, avatar, bio }) => {
  return (
    <div className="profile-badge">
      <img src={avatar} alt={name} className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{title}</p>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileBadge;
