// import React from "react";
import { useGetPlayersQuery } from "./api/index";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/nav";
import AllPlayers from "./components/players/AllPlayers";
import SPlayerPage from "./components/players/SPlayerPage";
import AddPlayer from "./components/players/AddPlayer";

function App() {
  const { isLoading } = useGetPlayersQuery();
  return (
    <>
      <Nav />
      {isLoading ? (
        <h1>IsLoading</h1>
      ) : (
        <Routes>
          <Route index element={<AllPlayers />} />
          <Route path={"/players/:id"} element={<SPlayerPage />} />
          <Route path={"addPlayer"} element={<AddPlayer />} />
        </Routes>
      )}
    </>
  );
}

export default App;
