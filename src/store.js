export const initialStore=()=>{
  return{
    contacts: [],
    loading : true
     
  }
}

export default function contacListReducer(store, action = {}) {
  switch(action.type){
    case 'seeContacts':
      return {
        
        contacts: action.payload,
        loading: false
      };
      default:
      throw Error('Unknown action.');

      case 'addContact':
        return {
          ...store,
          contacts: [...store.contacts, action.payload]
        };

      case 'deleteContact':
        return {
          ...store,
          contacts :store.contacts.filter((contacto)=> contacto.id !== action.payload)
        }

       case 'editcontacts':
        return {
          ...store,
          contacts : store.contacts.map((contact)=>contact.id === action.payload.id ? action.payload : contact )
          
         }
     
      }
          
     
}
