import React from "react";
import MainHeader from "../../headers/Main";
import MainFooter from "../../footers/Main";

import { useState } from "react";
import { Outlet } from "react-router-dom";

import {
  MainLayoutWrapper,
  ContentWrapper,
} from './styled';

import {
  ScrollPostitionType
} from "../../../@types";

const MainLayout = (): JSX.Element => {
  
  return (
    <MainLayoutWrapper className="wrapper">
      <MainHeader />
      <ContentWrapper>
        <Outlet />    
      </ContentWrapper>
      <MainFooter />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
