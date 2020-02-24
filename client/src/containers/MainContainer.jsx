import React from 'react';
import UserCard from '../components/UserCard';
import { Container } from "@material-ui/core";
import Header from './Header';


const MainContainer = () => {
  return (
    <Container maxWidth="sm">
      <Header/>
      <UserCard/>
    </Container>
  );
}

export default MainContainer;

