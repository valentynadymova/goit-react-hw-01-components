
import PropTypes from 'prop-types';
import {ContainerProfile, ProfileAvatar, ProfileLi, ProfileName, ProfileStats, ProfileTag} from './UserProfile.styled'

function UserProfile({name, tag, location, avatar,stats:{followers, views, likes} }){
    return(
      <ContainerProfile>
    <div>
      <ProfileAvatar
        src={avatar}
        alt="User avatar"
      />
      <ProfileName>{name}</ProfileName>
      <ProfileTag>{tag}</ProfileTag>
      <p>{location}</p>
    </div>
  
    <ProfileStats>
      <ProfileLi>
        <span>Followers</span>
        <span>{followers}</span>
      </ProfileLi>
      <ProfileLi>
        <span>Views</span>
        <span>{views}</span>
      </ProfileLi>
      <ProfileLi>
        <span>Likes</span>
        <span>{likes}</span>
      </ProfileLi>
    </ProfileStats>
  </ContainerProfile>
    )
  };


  UserProfile.propTypes={
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      })
    
  };

  export default UserProfile;
