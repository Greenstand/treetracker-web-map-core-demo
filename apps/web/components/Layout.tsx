import { Container } from '@mui/material';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function Layout(props: Props) {
  return <Container maxWidth="xs">{props.children}</Container>;
}
