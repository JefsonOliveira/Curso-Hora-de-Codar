// 3 - Alterando valor do contexto
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import ChangeCounter from "../components/ChangeCounter";

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorCOntext";

const Home = () => {
  // const {counter} = useContext(CounterContext);

  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />

      {/* 6 - Alterando o contexto complexo */}
      <dir>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </dir>
    </div>
  );
};

export default Home;
