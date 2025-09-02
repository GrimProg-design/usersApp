import { Link } from "react-router-dom";

export default function Buttons({ value, path, onClick, active }) {
  return (
    <Link
      to={path}
      onClick={onClick}
      className={active ? "header-active" : "header-buttons"}
    >
      {value}
    </Link>
  );
}
