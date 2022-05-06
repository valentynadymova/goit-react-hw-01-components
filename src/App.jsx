import UserProfile from './components/UserProfile';
import user from './data/user.json';
import { Container } from './App.styled';


export default function App() {
  return ( <Container>
    <UserProfile
    name={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
    />
  </Container>
  );
}