import React, { createContext } from "react";
import BoardWriteContext from "../../src/components/units/21-context-api/BoardWrite.container";

export const ExampleContext = createContext(null);

export default function ContextAPIPage({ isEdit }) {
  return (
    <ExampleContext.Provider value={{ isOpen: true }}>
      <BoardWriteContext isEdit={isEdit} />
    </ExampleContext.Provider>
  );
}
