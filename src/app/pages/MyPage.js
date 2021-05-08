import React from "react";
import {useSubheader} from "../../_metronic/layout";
import "./../../_metronic/_assets/sass/pages/my-page/my-page.scss";

export const MyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");

  return (<><h1 className="my-page">My Pagdfe</h1></>);
};
