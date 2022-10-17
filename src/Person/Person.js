import React from "react";
import { useParams } from "react-router-dom";
export default () => {
  let { person } = useParams();
  return (<div>{person}</div>);
};
