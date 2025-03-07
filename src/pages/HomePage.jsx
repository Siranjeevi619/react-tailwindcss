import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button
          className="px-4 bg-sky-400 py-4 rounded-full  "
          onClick={() => navigate("/login")}
        >
          login
        </button>
        <button
          className="px-4 bg-sky-400 py-4 rounded-full "
          onClick={() => navigate("/signin")}
        >
          {" "}
          sign up
        </button>
      </div>
    </div>
  );
}

export default HomePage;
