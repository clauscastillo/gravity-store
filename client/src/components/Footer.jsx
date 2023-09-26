import { BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <hr />
      <section className="footer">
        <img src="/img/gravity.png" alt="" width="300px" />
        <div className="social">
          <a href="https://www.instagram.com/gravity.py_/">
            <BiLogoInstagram size={30} />
          </a>
          <a href="http://wa.me/595985731684">
            <BiLogoWhatsapp size={30} />
          </a>
        </div>
        <p>GRAVITY STYLE</p>
        <p>+595 985 731 684</p>
        <p>Clothing Brand</p>
        <p>Asunción, Paraguay </p>
      </section>
      <section className="footer-bottom">
        <p>2023 Gravity Style &copy;</p>
      </section>
    </footer>
  );
};

export default Footer;
