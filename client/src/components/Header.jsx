import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [togglebar, setTogglebar] = useState(false);

  const handleToggle = () => {
    setTogglebar(!togglebar);
  };
  return (
    <>
      <header>
        <div></div>

        <img src="/img/gra.png" alt="" className="logo" />

        {!togglebar ? (
          <SlMenu size={30} onClick={handleToggle} className="toggle" />
        ) : (
          <IoMdClose size={30} onClick={handleToggle} className="toggle" />
        )}
        <nav className={togglebar ? "nav show-toggle" : "nav"}>
          <NavLink
            to={"/"}
            onClick={() => {
              setTogglebar(false);
            }}
          >
            INICIO
          </NavLink>
          <NavLink
            to={"/clothes"}
            onClick={() => {
              setTogglebar(false);
            }}
          >
            PRENDAS
          </NavLink>
          <NavLink
            onClick={() => {
              setTogglebar(false);
            }}
          >
            GUIA DE TALLAS
          </NavLink>
          <NavLink
            to={"/nosotros"}
            onClick={() => {
              setTogglebar(false);
            }}
          >
            NOSOTROS
          </NavLink>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Header;
