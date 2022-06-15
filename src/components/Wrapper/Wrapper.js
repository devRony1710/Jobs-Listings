import React from 'react';

//components
import { JobsCard } from '../Jobs-Card/JobsCard';
import { Container } from './Wrapper-Styles';

//styles component

export const Wrapper = () => {
  return (
    <Container>
      <JobsCard company="Photosnap" position="Senior Frontend Developer"/>
    </Container>
  )
}