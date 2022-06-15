import React from "react";

export type ContextType = {
  basePath: string;
};

export const authContext: ContextType = {
  basePath: "",
};

const Context: React.Context<ContextType> =
  React.createContext<ContextType>(authContext);

export default Context;
