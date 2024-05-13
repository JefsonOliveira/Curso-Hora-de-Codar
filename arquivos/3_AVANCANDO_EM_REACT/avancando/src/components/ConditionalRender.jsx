const ConditionalRender = () => {
  const x = true;

  return (
    <div>
      {/* 7 - render condicional */} <h3>Isso será exibido</h3>
      {x && <p>Se x for true sim!</p>}
    </div>
  );
};

export default ConditionalRender;
