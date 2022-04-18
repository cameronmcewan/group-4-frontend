import React from "react";

const UserContext = React.createContext({
  address: {},
  setAddress: () => {},
});

export { UserContext };
