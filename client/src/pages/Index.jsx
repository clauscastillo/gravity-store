import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 2,
    name: "Soul Projection",
    price: 140000,
    img: "/img/products/7.jpg",
  },
  {
    id: 3,
    name: "Kiev Atmos",
    price: 125000,
    img: "/img/products/5.jpg",
  },
  {
    id: 4,
    name: "Be The Change",
    price: 125000,
    img: "/img/products/1.jpg",
    img2: "/img/products/2.jpg",
  },
  {
    id: 5,
    name: "Groove Storm",
    price: 125000,
    img: "/img/products/3.jpg",
  },
  {
    id: 6,
    name: "Like Home",
    price: 160000,
    img: "/img/products/6.jpg",
  },
];

const Index = () => {
  useEffect(() => {
    const animate = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.7) {
          element.classList.add("animate"); // Agrega la clase para activar la animación
        }
      });
    };
    window.addEventListener("scroll", animate);
  }, []);
  return (
    <main>
      <article className="main-quote">
        <h2>ATEMPORAL FLOW</h2>
        <h4>
          Encuentra tu autenticidad en diseños creativos y robustos. Destaca
          entre la multitud con creaciones nacidas de la esencia humana más
          pura.
        </h4>
        <Link to={"/clothes"}>
          <button className="buy">Comprar</button>
        </Link>
      </article>
      <section className="products">
        <article className="card-product">
          <img src="/img/products/4.jpg" alt="" className="rounded" />
          <h3>Fourth Dimension</h3>
        </article>
        {products &&
          products.map((product) => {
            return (
              <article
                className="card-product animate-on-scroll"
                key={product.id}
              >
                <img src={product.img} alt="" className="rounded" />
                <h3>{product.name}</h3>
              </article>
            );
          })}
      </section>
      <section className="full-width">
        <div className="buy-collection">
          <h2>Compra la colección</h2>
          <button className="buy">Comprar</button>
        </div>
      </section>
      <div className="animate-on-scroll">JAJAJAJA</div>
      {/* <h2 className="h2">IN DA CLUB COLLECTION</h2>
      <h4>Realiza tu compra en línea a través del carrito o al whatsapp</h4>
      <section className="categories"></section>
      <section className="products"></section> */}
    </main>
  );
};

export default Index;
