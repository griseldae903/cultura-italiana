// // ContactForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import config from '../../config'; // Importa la variable global




// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});

//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'El nombre es obligatorio';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'El correo electrónico es obligatorio';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Ingrese un correo electrónico válido';
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'El mensaje es obligatorio';
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       try {
//         await axios.post(config.formSpreeURL, formData);
//         setSuccessMessage('Consulta enviada con éxito');
//         setErrorMessage(''); // Limpiar cualquier mensaje de error previo
//         setFormData({
//           name: '',
//           email: '',
//           message: '',
//         }); // Limpiar los datos del formulario
//       } catch (error) {
//         console.error('Error al enviar la consulta', error);
//         setErrorMessage('Error al enviar la consulta. Por favor, inténtelo de nuevo.');
//         setSuccessMessage(''); // Limpiar cualquier mensaje de éxito previo
//       }
//     }
//   };


//   return (
    
//     <div>
//       <div className='argentina' style={{textAlign:'center'}}><h4 >Comunica e costruiamo una comunità!</h4></div>
//       {successMessage && <div style={{ textAlign: 'center',color: 'green' }}>{successMessage}</div>}
//       {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         margin: 'auto',
//         textAlign: 'right',
//         maxWidth: '50%',
//         backgroundColor: 'rgb(217, 199, 133, 0.5)', 
//         padding: '25px',
//         borderRadius: '10px',
//         // boxShadow: '15px 15px 20px rgba(96, 94, 95, 0.75)',
//         boxShadow: '10px 10px 10px rgba(41, 161, 247, 0.3)'
        
//       }}
//     >
//       <div style={{ marginBottom: '15px' }}>
//         <label style={{ marginRight: '15px' }}>
//           Nombre: <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className={errors.name ? 'error' : ''}
//           />
//           {errors.name && <span className="errorMessage">{errors.name}</span>}
//         </label>
//       </div>

//       <div style={{ marginBottom: '15px' }}>
//         <label style={{ marginRight: '15px' }}>
//           Correo Electrónico: <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={errors.email ? 'error' : ''}
//           />
//           {errors.email && <span className="errorMessage">{errors.email}</span>}
//         </label>
//       </div>

//       <div style={{ marginBottom: '15px' }}>
//         <label style={{ marginRight: '15px', verticalAlign: 'top' }}>
//           Mensaje: <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className={errors.message ? 'error' : ''}
//           />
//           {errors.message && <span className="errorMessage">{errors.message}</span>}
//         </label>
//       </div>

//       <button type="submit" className="btn btn-outline-dark"style={{ marginRight: '15px' }}>Enviar Consulta</button>
//     </form></div>
//   );
// };

// export default ContactForm;

// ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config'; // Importa la variable global

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post(config.formSpreeURL, formData);
        setSuccessMessage('Consulta enviada con éxito');
        setErrorMessage(''); // Limpiar cualquier mensaje de error previo
        setFormData({
          name: '',
          email: '',
          message: '',
        }); // Limpiar los datos del formulario
      } catch (error) {
        console.error('Error al enviar la consulta', error);
        setErrorMessage('Error al enviar la consulta. Por favor, inténtelo de nuevo.');
        setSuccessMessage(''); // Limpiar cualquier mensaje de éxito previo
      }
    }
  };

  return (
    <div >
      <div className='argentina' style={{ textAlign: 'center' }}><h4>¡Comunica e construiamo una comunità!</h4></div>
      {successMessage && <div style={{ textAlign: 'center', color: 'green' }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <form
        onSubmit={handleSubmit}
        style={{
          margin: 'auto',
          textAlign: 'center',
          maxWidth: '500px',
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: 'rgb(217, 199, 133)',
          boxShadow: '10px 10px 10px rgba(74, 172, 242, 0.5)',
        }}
      >
        <div style={{ marginBottom: '10px' }}>
          <input
            type='text'
            name='name'
            placeholder='Nombre'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type='email'
            name='email'
            placeholder='Correo Electrónico'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            name='message'
            rows='4'
            placeholder='Mensaje'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
        </div>
        <div>
          <button type="button" class="btn btn-light">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;