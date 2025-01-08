import React from "react";
import HookUseState from "./components/HookUseState";
import HookUseReducer from "./components/HookUseReducer";
import HookUseEffect from "./components/HookUseEffect";

//useContext

import { useContext } from "react";
import { SomeContext } from "./components/HookUseContext";
import HookUseRef from "./components/HookUseRef";
import HookUseCallback from "./components/HookUseCallback";
import HookUseMemo from "./components/HookUseMemo";
import HookUseLayoutEffect from "./components/HookUseLayoutEffect";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto {contextValue}</p>
      <hr />
      <HookUseRef/>
      <HookUseCallback/>
      <HookUseMemo/>
      <HookUseLayoutEffect/>
    </div>
  );
};

export default Home;
