import React from 'react';
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
  console.log(props.auth);
  return (
    <div>
      <button>LOGIN</button>
    </div>
  )
}

export default SwipeContainer;

