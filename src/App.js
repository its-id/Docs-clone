import Navbar from "./components/Navbar/Navbar";
import DocEditor from "./components/DocEditor/DocEditor";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="w-full flex flex-row justify-between">
        <DocEditor />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
