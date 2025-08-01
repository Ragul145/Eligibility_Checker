  import React, { createContext, useState } from "react";
  import Navbar from "./Pages/Navbar";
  import Home from "./Pages/Home";
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import { routes } from "../Routes/routes";
  export const AppContext = createContext();

  function Root() {
    const [userDetail, setUserDetail] = useState("");
    const [selectedResult, setSelectedResult] = useState("");
    return (
      <BrowserRouter>
        <AppContext.Provider value={{ userDetail, setUserDetail , selectedResult,setSelectedResult }}>
          <Navbar />
          {/* <Home /> */}
          <Routes > 
            {routes?.map(({path,Component}, index)=>(
              <Route path={path} element={<Component />} key={index}/>
            ))}
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }

  export default Root;
