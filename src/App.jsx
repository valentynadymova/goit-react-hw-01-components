import UserProfile from './components/UserProfile';
import user from './data/user.json';
import { Container } from './App.styled';
import StatisticTab from './components/StatisticTab';
import data from './data/data.json';
import friends from './data/friends.json';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';
import transactions from './data/transactions.json';

export default function App() {
  return ( <Container>
    <UserProfile
    name={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />

    <StatisticTab
    title="Upload Stats"
    stats={data}
    />

    <FriendList
    friends={friends}
    />
    
    <TransactionHistory
    items={transactions}
    />




  </Container>);
}