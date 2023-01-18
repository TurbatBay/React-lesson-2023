import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [activeIndex, setActiveIndex] = useState(false);
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <Link
          className={activeIndex === 0 ? "active links" : "links"}
          onClick={() => {
            setActiveIndex(0);
          }}
          to="/login"
        >
          Login
        </Link>
        <Link
          className={activeIndex === 1 ? "active links" : "links"}
          onClick={() => {
            setActiveIndex(1);
          }}
          to="/register"
        >
          Register
        </Link>
        <Link
          className={activeIndex === 2 ? "active links" : "links"}
          LoginRegisteraccordian
          onClick={() => {
            setActiveIndex(2);
          }}
          to="/accordian"
        >
          accordian
        </Link>
      </nav>
    </div>
  );
}
