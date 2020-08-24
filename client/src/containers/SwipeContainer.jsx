import React from 'react';
import Logout from '../components/Logout'
// import UserCard from '../components/UserCard';
// import { Container } from "@material-ui/core";
// import Header from "./Header"


// const renderAllCharlies = (charlies) => {
//   return charlies.map(charlie => {
//     return <UserCard key={charlie._id} id={charlie._id} users={charlie}/>
//   })
// }

// const SwipeContainer = (props) => {
//   return (
//     <Container maxWidth="sm">
//       <Header />
//       {renderAllCharlies(props.charlies.data)}
//     </Container>
//   );
// }

const SwipeContainer = (props) => {
  const { submit } = props
  return (
    <div>
      THIS WILL BE THE WIPER OF SWIPERS
        <Logout submit={submit} />
    </div>
  )
}

export default SwipeContainer;

