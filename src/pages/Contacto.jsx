


//Contacto.jsx
                                  
// Contacto.jsx
import React from 'react';
import ContactForm from './ContactoForm.jsx';  // Asegúrate de que la ruta sea correcta

const Contacto = () => {
  return (
    <div>
      <div style={{ marginTop: "200px" }}> </div>
      <ContactForm />
    </div>
  );
};

export default Contacto;
                                        ///////  CON WORKBENCH ///////////////////
// import React, { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

// const API = "http://localhost:8000/post/";

// const Contacto = () => {
//   const [posts, setPosts] = useState([]);
//   const [newComment, setNewComment] = useState({
//     title: "",
//     content: "",
//   });

//   const getAllPost = async () => {
//     const res = await axios.get(API);
//     setPosts(res.data);
//   };

//   const deletePost = async (id) => {
//     await axios.delete(`${API}${id}`);
//     getAllPost();
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewComment((prevComment) => ({
//       ...prevComment,
//       [name]: value,
//     }));
//    };

//   const handleFormSubmit = async (e) => {
//    e.preventDefault();      



//     // Aquí puedes agregar lógica para validar los campos antes de enviarlos al servidor

//     // Envía el nuevo comentario al servidor
    
//        await axios.post(API, newComment);

//    //  Actualiza la lista de comentarios
//     getAllPost();

//    //Limpia el formulario
//    setNewComment({ title: "", content: "" });
  



//     };
  






 

//       useEffect(() => {
//     getAllPost();
//   }, []);

//   return (
//     <div className="container" style={{ marginTop: "185px" , maxWidth: "50%", backgroundColor:"rgb(119, 121, 58,0.5)", padding:"25px", borderRadius: "10px", boxShadow:"15px 15px 20px rgba(96, 94, 95, 0.75)" }}>
//       <div className="row">
//         <div className="col">
//           <h5 style={{color: "rgb(246, 116, 64)"}}>Dejános tu mensajito <i class="fa-solid fa-heart"></i></h5>
//           <form onSubmit={handleFormSubmit}>
//             <div className="mb-3">
//               <label htmlFor="title" className="form-label">
//                 Nombre
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="title"
//                 name="title"
//                 value={newComment.title}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="content" className="form-label">
//                 Mensaje (si deseás recibir mas novedades, incluínos tu correo electrónico!)
//               </label>
//               <textarea
//                 className="form-control"
//                 id="content"
//                 name="content"
//                 value={newComment.content}
//                 onChange={handleInputChange}
//               ></textarea>
//             </div>
//             <button 


//                type="submit"
//   className="btn btn-primary"
//   style={{
//     backgroundColor: 'rgb(119, 121, 58)',
//     transition: 'background-color 0.3s ease-in-out', // Transición para el color de fondo
//     outline: 'none',}}
//   // Aplicar estilo al pasar el cursor sobre el botón
//   onMouseOver={(e) => e.target.style.backgroundColor = 'rgb(246, 116, 64)'}
//   // Restaurar estilo cuando el cursor sale del botón
//   onMouseOut={(e) => e.target.style.backgroundColor = 'rgb(119, 121, 58)'}
// >
//   Enviar Comentario
//             </button>
//         </form>




// {/*   NO HABILITADO PARA OTRAS FUNCIONES COMO EDITAR O BORRAR  */}
//           {/* <table className="table">
//             <thead>
//               <tr>
//                 <th>Nombre</th>
//                 <th>Mensaje</th>
//                 <th>Acciones</th>
//               </tr>
//             </thead>
//             <tbody>
//               {posts.map((post) => (
//                 <tr key={post.id}>
//                   <td>{post.title}</td>
//                   <td>{post.content}</td>
//                   <td>
//                     <button
//                       onClick={() => deletePost(post.id)}
//                       className="btn btn-danger"
//                     >
//                       Eliminar
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table> */}

// {/**/}




//           </div>
//       </div>
//     </div>
//   );
// };

//    export default Contacto;
