import React from 'react';

const UserDetailsComponent = ({user}) => {
    const { login, name, avatar_url, bio, html_url, location, twitter_username } = user;
    return (
        <div>
            <p>User Name : {login}</p>
            <p>Profile Name : {name}</p>
            <img src={avatar_url} alt="profile" />
            <p>Bio : {bio}</p>
            <p>{html_url}</p>
            <p>{location}</p>
            <p>{twitter_username}</p>

            
        </div>
    );
};

export default UserDetailsComponent;