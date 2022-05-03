
import PropTypes from 'prop-types';

function UserProfile({name, tag, location, avatar, followers, views, likes }){
    return(
      <div>
    <div>
      <img
        src={avatar}
        alt="User avatar"
      />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  
    <ul>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
    )
  };


  UserProfile.propTypes={
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  };

  export default UserProfile;
