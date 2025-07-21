import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  deleteUserById,
} from "../services/usersServices.js";

export function useUsers() {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  async function handleCreateUser(user) {
    try {
      const newUser = await createUser(user);
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao cadastrar usuário.");
    }
  }

  async function handleDeleteUser(id) {
    if (!window.confirm("Tem certeza que deseja excluir este usuário?")) return;

    try {
      await deleteUserById(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      alert("Erro ao excluir usuário.");
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    handleCreateUser,
    handleDeleteUser,
  };
}
