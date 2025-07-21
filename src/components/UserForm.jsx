import { useRef } from "react";

function UserForm({ onSubmit }) {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  function handleSubmit() {
    const name = inputName.current.value;
    const age = inputAge.current.value;
    const email = inputEmail.current.value;

    if (!name || !age || !email) {
      alert("Preencha todos os campos.");
      return;
    }

    onSubmit({ name, age: String(age), email });

    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";
  }

  return (
    <form>
      <h1>Cadastro de Usuário</h1>
      <input name="name" type="text" placeholder="Nome" ref={inputName} />
      <input name="age" type="number" placeholder="Idade" ref={inputAge} />
      <input name="email" type="email" placeholder="Email" ref={inputEmail} />
      <button type="button" onClick={handleSubmit}>
        Cadastrar
      </button>
    </form>
  );
}

export default UserForm;
