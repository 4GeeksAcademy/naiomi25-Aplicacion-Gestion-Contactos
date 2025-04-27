import { StoreProvider } from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { CrearContacto } from "./CrearContacto";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";



export const Editcontact = () => {

const {dispatch,store} = useGlobalReducer
const {id } = useParams()

const [contactoEditado, setContactoEditado] = useState(null);

useEffect(() => {
    if (store && store.contacts) {
      const contacto = store.contacts.find((contact) => contact.id === parseInt(id));
      if (contacto) {
        setContactoEditado(contacto);
      }
    }
  }, [id]);



    const editarContacto = (nombre,telefono,email,direccion)=>{
       
        fetch(`https://playground.4geeks.com/contact/agendas/naiomi/contacts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: nombre, phone: telefono, email, address: direccion }),
              
            
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al editar el contacto');
                }
                return response.json();
            })
            .then(data => {
                
                console.log('Contacto editado:', data);
                dispatch({ type: 'editcontacts', payload: data.contacts }); 
               // showAgenda()
            })
            .catch(error => {
                console.error('Error:', error);
            });   }






return (
   <CrearContacto id = {id} editar = {editarContacto} contacto = {contactoEditado}/>
)

   








}