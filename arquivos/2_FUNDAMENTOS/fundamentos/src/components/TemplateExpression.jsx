// 4 - TEmplate Expression

const TemplateExpression = () => {
  const name = "Matheus";

  const data = {
    age: 31,
    job: "Programador",
  };

  return (
    <div>
      <p>A soma é {2 + 2} </p>
      <h3>Bem Vindo {name} </h3>
      <p>Sua idade é {data.age} e você é {data.job}. </p>
    </div>
  );
};

export default TemplateExpression;
