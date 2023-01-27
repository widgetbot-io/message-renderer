import { MessageRendererProvider } from "../index";
import React from "react";

function Wrapper(Story) {
  return (
    <MessageRendererProvider>
      {({ themeClass }) => (
        <div className={themeClass} style={{ padding: 20 }}>
          {Story()}
        </div>
      )}
    </MessageRendererProvider>
  );
}

export default Wrapper;
