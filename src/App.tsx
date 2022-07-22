import React from 'react';
import routers from 'router';
import 'antd/dist/antd.css';
import './app.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        {routers.map((item) => {
          return <Route path={item.path} key={item.key} element={<item.component />}></Route>;
        })}
      </Routes>
    </div>
  );
}

export default App;
