import {React, } from "react";
import { useState ,} from "react";

export const Formulario = ({showAgenda,editar,id}) => {

  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  

 

  const createContact = () => {
       const data = {
          name:nombre,
          phone: telefono,
          email: email,
          address: direccion,
    }

    fetch('https://playground.4geeks.com/contact/agendas/naiomi/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        data
          ),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
       
       
        setNombre("");
        setDireccion("");
        setTelefono("");
        setEmail("");
        showAgenda()
         console.log('Contact created:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
  
    



const handleSubmit = (event) => {
    event.preventDefault();
    if (editar && id) {
     editar(nombre, telefono, email, direccion);
     
    } else {
      createContact();
    }
    setNombre("");
    setDireccion("");
    setTelefono("");
    setEmail("");
    
  }
    

    return(
        <>
        
        <form  onSubmit = {handleSubmit} className="row g-3 m-4">
  <div className="col-md-6">
    <label htmlFor="inputNombre" className="form-label">Nombre y apellidos</label>
    <input type="input" value = {nombre}className="form-control" id="inputNombre"  onChange={(e) => setNombre(e.target.value)} />
  </div>

  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Direccion</label> 
    <input type="text" value  = {direccion} className="form-control"   onChange={(e) => setDireccion(e.target.value)} id="inputAddress" />
  </div>
  <div className="col-12">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" value  = {email}  className="form-control"  onChange={(e) => setEmail(e.target.value)} id="email" />
  </div>
  <div className="col-md-6">
    <label htmlFor="telefono" className="form-label">Telefono</label>
    <input type="number" className="form-control" value = {telefono} onChange={(e) => setTelefono(e.target.value)} id="telefono"/>
  </div>
  <div className="col-12">
          <button type="submit" className="btn btn-primary">Enviar</button>
  </div>

</form>
        </>
    )
  }
