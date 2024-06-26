import React from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";

const ReduxWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;
