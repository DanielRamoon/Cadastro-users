import "./Style.css";
import UserForm from "../../components/UserForm";
import UserCard from "../../components/UserCard";
import { useUsers } from "../../hooks/useUsers";

function Index() {
  const { users, handleCreateUser, handleDeleteUser } = useUsers();

  return (
    <>
      <div className="container">
        <UserForm onSubmit={handleCreateUser} />
      </div>

      <div className="users-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
        ))}
      </div>
    </>
  );
}

export default Index;
