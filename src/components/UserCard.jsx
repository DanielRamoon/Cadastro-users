import { FaTrash } from "react-icons/fa";

function UserCard({ user, onDelete }) {
  return (
    <div className="user-card">
      <div className="user-info">
        <p>Nome: {user.name}</p>
        <p>Idade: {user.age}</p>
        <p>Email: {user.email}</p>
      </div>
      <button onClick={() => onDelete(user.id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default UserCard;
