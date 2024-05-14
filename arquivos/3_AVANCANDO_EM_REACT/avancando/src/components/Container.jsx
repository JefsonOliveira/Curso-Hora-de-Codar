// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
  return (
    <div>
      <h1>Conteúdo do componete pai</h1>
      {children}
    </div>
  );
};

export default Container;
