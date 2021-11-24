import React from 'react';
import {LoggedOut} from '../pages/loggedout/index'; //por preguntar
import { Route, Routes } from 'react-router-dom';
import {Register} from '../pages/register';

function AppRouter() {
  return (
    <div className="AppRouter">
      <Routes>
        <Route exact path="/" element={<LoggedOut />} />
        <Route exact path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
