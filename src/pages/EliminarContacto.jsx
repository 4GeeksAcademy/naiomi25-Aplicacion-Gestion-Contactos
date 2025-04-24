import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const ContactDelete = ({id ,showAgenda})=>{
    



const deleteContact = () => {
    
    fetch(`https://playground.4geeks.com/contact/agendas/naiomi/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
      
        }

      })
      .then(response => {
        showAgenda();
        if (!response.ok) throw new Error('Error al recibir la respuesta');
        return response.json();
      })
      .then(text => {
        console.log('Contacto eliminado (texto devuelto):',text);
      })

        .catch((error) => {
            console.error('Hubo un problema con la operación de eliminar:', error);
          });
         

} 
return (
    
    <button 
      type="button" 
      className="btn btn-outline-warning" 
      onClick={deleteContact} 
    >
      <span><i className="fa-solid fa-trash"></i></span> 
    </button>
   

  );
};


