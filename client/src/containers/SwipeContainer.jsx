import React from 'react';
import UserCard from '../components/UserCard';
import { Container } from "@material-ui/core";


const MainContainer = () => {
  return (
    <Container maxWidth="sm">
      <UserCard/>
    </Container>
  );
}

export default MainContainer;

