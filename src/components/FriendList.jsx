import PropTypes from 'prop-types';
import {FriendUl, Status, Avatar, Name, Item} from './FriendList.styled'


 export default function FriendList({friends}){
    return (
        <FriendUl>
            {friends.map(friend=>(
                <div key={friend.id}>
                    <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    />
                </div >
            ))}
        </FriendUl>
    )}

function FriendListItem ({avatar,name,isOnline}){
return(
<Item>
  <Status>{isOnline}</Status>
  <Avatar src={avatar} alt="User avatar" width="48" />
  <Name>{name}</Name>
</Item>
)};



FriendList.propTypes={
    friebds:PropTypes.arrayOf(
        PropTypes.shape({
            avatar:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
            id:PropTypes.number.isRequired,
        })
    )
}