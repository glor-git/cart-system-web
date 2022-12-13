import { NextPage } from "next";
import React from 'react';
import styled from '@emotion/styled';

type props = {
  children: JSX.Element
}

const Layout: NextPage<props> = ({ children }) => {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  )
}

export default Layout

const LayoutWrapper = styled.div `
  max-width: 1020px;
  margin: 0 auto;
  background: white;
`;