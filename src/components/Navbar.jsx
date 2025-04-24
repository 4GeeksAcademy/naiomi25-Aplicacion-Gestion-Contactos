import { Link } from "react-router-dom";
import { Formulario } from "../pages/formulario";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link className=" text-decoration-none" to="/">
					<span className="navbar-brand mb-0 h1">Agenda</span>
				</Link>
				<div className="ml-auto">
					<Link to="/formulario">
						<button className="btn btn-primary">Añadir nue contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};