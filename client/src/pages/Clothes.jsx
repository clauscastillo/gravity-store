import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const title = "Realiza tu compra en línea a través del carrito o al whatsapp";

const products = [
  {
    id: 1,
    name: "Fourth Dimension",
    price: 125000,
    img: "/img/products/4.jpg",
  },
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

const Clothes = () => {
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
      <h2 className="h2">IN DA CLUB COLLECTION</h2>
      <h4>{title.toUpperCase()}</h4>
      {products &&
        products.map((product) => {
          return (
            <article
              key={product.id}
              className="card-product2 animate-on-scroll"
            >
              <img src={product.img} alt="" className="product-photo" />
              <h3 className="product-name">{product.name}</h3>

              <p className="product-price">
                PYG {product.price.toLocaleString()}
              </p>
              <Link
                to={
                  "https://api.whatsapp.com/send?phone=595&text=Hola,%20%C2%BFc%C3%B3mo%20est%C3%A1s%3F"
                }
              >
                <button>
                  Comprar <FaWhatsapp />
                </button>
              </Link>

              <br />
            </article>
          );
        })}
    </main>
  );
};

export default Clothes;
