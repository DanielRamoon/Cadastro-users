import Api from "./api";

export async function getUsers() {
  const response = await Api.get("/usuarios");
  return response.data;
}

export async function createUser(user) {
  const response = await Api.post("/usuarios", user);
  return response.data;
}

export async function deleteUserById(id) {
  await Api.delete(`/usuarios/${id}`);
}
