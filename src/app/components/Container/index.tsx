import React from "react";
import Loader from "../Loader";

export default function Container({ isLoading, children }) {
  return <>{isLoading ? <Loader /> : children}</>;
}
