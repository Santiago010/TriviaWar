import "./App.css";
import { UserNameProvider } from "./context/UserNameContext";
import MainRoute from "./routers/MainRoute";

function App() {
  return (
    <div className="App">
      <UserNameProvider>
        <MainRoute />
      </UserNameProvider>
    </div>
  );
}

export default App;
