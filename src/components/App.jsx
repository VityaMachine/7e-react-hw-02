import MenuBar from "./MenuBar";

import userData from "../data/user.json";

function App() {
  return (
    <div className="App">
      <MenuBar user={userData} />
    </div>
  );
}

export default App;
