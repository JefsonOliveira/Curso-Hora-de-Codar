import "./App.css";

// 2 - Importando componente
import FirstComponent from "./components/FirstComponent.jsx";

// 4 - TEmplate Expression
import TemplateExpression from "./components/TemplateExpression.jsx";

// 5 - Hierarquia de componentes
import MyComponent from "./components/MyComponent.jsx"

// 6 - Eventos
import Events from "./components/Events.jsx";

function App() {
  // 3 - Comentarios
  return (
    <div className="App">
      {/* 3 - Comentarios */}
      <h2>Hello World</h2>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
