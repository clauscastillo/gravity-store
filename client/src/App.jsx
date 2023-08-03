import gravityLogo from "/img/gra.png";
import banner from "/img/impose.png";
import gravityfoot from "/img/gravity.png";
import "./App.css";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import {
  BiSolidShoppingBagAlt,
  BiLogoWhatsapp,
  BiSolidUpArrow,
} from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { Badge } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [togglebar, setTogglebar] = useState(false);
  const [search, setSearch] = useState(false);

  const handleToggle = () => {
    setTogglebar(!togglebar);
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <>
      <header id="header" className="header">
        <a href="">
          <img src={gravityLogo} alt="" className="logo" />
        </a>

        <div className="nav">
          <IoSearch size={"1.5rem"} color="#fff" onClick={handleSearch} />
          <div className={search ? "search-box show-search" : "search-box"}>
            <input type="text" />
            <IoSearch />
            <IoMdClose onClick={handleSearch} />
          </div>
          <Badge count={cart} color="#C777C6">
            <BiSolidShoppingBagAlt
              size={"1.5rem"}
              color="#fff"
              onClick={addToCart}
            />
          </Badge>

          <IoIosMenu size={"1.5rem"} color="#fff" onClick={handleToggle} />
        </div>
      </header>
      <aside className={togglebar ? "toggle-menu show-toggle" : "toggle-menu"}>
        <IoMdClose onClick={handleToggle} />
      </aside>
      <main>
        <div className="whatsapp-button">
          <a href="http://wa.me/595985731684">
            <BiLogoWhatsapp size={"4rem"} color="#000" />
          </a>

          <a href="#header">
            <BiSolidUpArrow
              className={scrollPosition > 300 ? "show" : "hide"}
              size={"2rem"}
            />
          </a>
        </div>

        <div className="advertising">
          Envío gratis a partir de compras de 100 mil GS!
        </div>
        <img className="banners" src={banner} alt="" />
        <h2 className="h2">Impone tu presencia con el estilo Gravity!</h2>
        <section className="categories"></section>
        <section className="products">
          {products.map((product) => {
            return (
              <article key={product.name} className="card-product">
                <img src={product.images[0]} alt="" />
                <h2>{product.name}</h2>
                <h3>
                  {product.price.toLocaleString("en-US")}
                  <span style={{ fontFamily: "Quicksand", fontWeight: "600" }}>
                    ₲
                  </span>
                </h3>
                <button className="view-product">
                  <a href={"/product/" + product._id}>Ver producto</a>
                </button>
              </article>
            );
          })}
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
      <footer>
        <section className="footer">
          <img src={gravityfoot} alt="" width="100px" height="61px" />
          <div className="social">
            <a href="https://www.instagram.com/gravity.py_/">Instagram</a>
            <a href="http://wa.me/595985731684">Whatsapp</a>
          </div>
        </section>
        <section className="footer-bottom">
          <p>2023 Gravity Style &copy;</p>
        </section>
      </footer>

      <div className="devinfo" onClick={handleScroll}>
        togglebar: {togglebar.toString()}, scroll: {scrollPosition.toString()},
      </div>
    </>
  );
}

export default App;
