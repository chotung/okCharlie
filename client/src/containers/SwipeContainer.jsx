import React from 'react';
import UserCard from '../components/UserCard';
import { Container } from "@material-ui/core";


const MainContainer = (props) => {
  return (
    <Container maxWidth="sm">
      <UserCard users={props.users} />
    </Container>
  );
}

export default MainContainer;

