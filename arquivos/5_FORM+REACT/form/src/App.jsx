import MyForm from "./components/MyForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Form em React</h1>
      <MyForm userName="Matheus" userEmail="matheus@horadecodar.com.br" />
    </div>
  );
}

export default App;
