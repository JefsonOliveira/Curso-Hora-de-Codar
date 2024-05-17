import { useState } from "react";
import "./MyForm.css";

// eslint-disable-next-line react/prop-types
const MyForm = ({ userName, userEmail }) => {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  //  5 - Envio de form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, bio, role);

    // Validação
    // Envio

    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  console.log(name, email);

  return (
    <div>
      {/* 1 - Criação de form */}
      {/* 5 - Envio de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            // 4 - SImplificando manipulação
            onChange={(e) => setEmail(e.target.value)}
            // 6 - Controlled input
            value={email || ""}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
export default MyForm;
