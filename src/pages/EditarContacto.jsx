import { StoreProvider } from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { Formulario } from "./formulario";

 

export const Editcontact = ({showAgenda}) => {

const {id } = useParams()

    const editarContacto = (nombre,telefono,email,direccion)=>{
       
        fetch(`https://playground.4geeks.com/contact/agendas/naiomi/contacts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
        
                name:nombre,
                phone: telefono,
                email: email,
                address: direccion,
              
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al editar el contacto');
                }
                return response.json();
            })
            .then(data => {
                
                console.log('Contacto editado:', data);
                showAgenda(); 
            })
            .catch(error => {
                console.error('Error:', error);
            });   }






return (
   <Formulario id = {id} editar = {editarContacto}/>
)

   








}