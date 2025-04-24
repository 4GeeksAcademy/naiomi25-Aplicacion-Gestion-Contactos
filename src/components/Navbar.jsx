import { Link } from "react-router-dom";
import { Formulario } from "../pages/formulario";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {
	const {store} = useGlobalReducer()

	

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link className=" text-decoration-none" to="/">
					<span className="navbar-brand mb-0 h1 text-light">Agenda</span>
				</Link>
				<h2 className="contador text-light">Contactos {store.contacts.length}</h2>
				<div className="ml-auto">
					<Link to="/formulario">
						<button className="btn btn-light text-info-emphasis">Añadir nuevo contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};