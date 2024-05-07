import { Container } from '@mui/material';
import React from 'react';

type ChildrenProps = {
  children?: React.ReactNode;
};

export default function Wrapper(props: ChildrenProps) {
  return <Container maxWidth="xs">{props.children}</Container>;
}
