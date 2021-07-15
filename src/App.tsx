import React from 'react';
import './styles/app.scss';
import Canvas from "./Components/Canvas";
import ToolBar from "./Components/ToolBar";
import SettingBar from "./Components/SettingBar";

function App() {
  return (
    <div className="App">
      <ToolBar />
      <SettingBar />
      <Canvas  />
    </div>
  );
}

export default App;
