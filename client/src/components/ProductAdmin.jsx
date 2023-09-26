import axios from "axios";
import { useState } from "react";
import "./styles/ProductAdmin.css";

const ProductAdmin = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    axios
      .post("http://localhost:8000/api/products", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form action="">
        <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
          <h2>Agregar Producto</h2>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
          <label htmlFor="price">Price</label>
          <input type="number" name="" id="" />
          <label htmlFor="">Description</label>
          <input type="text" name="description" onChange={handleChange} />
          <label htmlFor="">Imagenes para el producto</label>
          <input type="file" name="image" onChange={handleImage} multiple />
          <button type="submit">Enviar</button>
        </form>
      </form>
    </div>
  );
};

export default ProductAdmin;
