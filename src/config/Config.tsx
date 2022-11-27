import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../components/loader/Loader";
import Home from "../pages/Home";
const Config = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* <------Regular Routes------> */}
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Config;
