import React from "react";
import ReactDOM from "react-dom/client";
import ContextApp from "./UseContext/App";
import RefApp from "./UseRef/App";
import CallApp from "./UseCallback/App";
import MemoApp from "./UseMemo/App";
import FetchApp from "./CustomHook/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/usecontext" element={<ContextApp />} />
      <Route path="/useref" element={<RefApp />} />
      <Route path="/usecallback" element={<CallApp />} />
      <Route path="/usememo" element={<MemoApp />} />
      <Route path="/usefetch" element={<FetchApp />} />
    </Routes>
  </BrowserRouter>
);
