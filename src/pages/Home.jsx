import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { CrearContacto, } from "./CrearContacto.jsx";
import { ContactDelete } from "./EliminarContacto.jsx";
import { useNavigate } from "react-router-dom";
import { array } from "prop-types";




export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()

	useEffect(() => {
		//createAgenda()
		showAgenda()

	}, [])
	const createAgenda = (
		() => {
			fetch('https://playground.4geeks.com/contact/agendas/naiomi', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: 'naiomi',
					contacts :[]
				}),
			})
				.then(response => {
					if (response.status === 400 || response.status === 409)
						return;
					if (!response.ok) {
						console.warn('usuario ya existe');
					}
					return response.json();
				})
				.then(data => {
					console.log('Agenda created:', data);
				})
				.catch(error => {
					console.error('There was a problem with the fetch operation:', error);
				});
		}

	)
	const showAgenda = () => {
		fetch('https://playground.4geeks.com/contact/agendas/naiomi', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				if (!response.ok) {
					//throw new Error('Network response was not ok');
					createAgenda()
				}
				return response.json();
			})
			.then(data => {
				console.log('Agenda fetched:', data);
				dispatch({ type: 'seeContacts', payload: data.contacts });
			})
			.catch(error => {
				console.error('There was a problem with the fetch operation:', error);
			});
	};


	const contactsAvailable = store && store.contacts && Array.isArray(store.contacts)
	

		return (
			<>
			
			
			  <div className="  row row-cols-1 row-cols-md-6 g-4 m-2">
				{contactsAvailable  && store.contacts.length > 0  && store.contacts.map((contact) => (
				  <div className="col" key={contact.id}>
					<div className="card cardModel">
					<img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${(contact.name)}`}
  					className="card-img-top imagenAvatar"
  					alt={`Avatar de ${contact.name}`}/>

					  <div className="card-body">
						<h5 className="card-title in">
						<i className="fa-solid fa-user"></i> {contact.name}
						</h5>
						<p className="card-text"><i className="fa-solid fa-house"></i> {contact.address}</p>
						<p className="card-text"><i className="fa-solid fa-phone"></i> {contact.phone}</p>
						<p className="card-text"><i className="fa-solid fa-envelope"></i> {contact.email}</p>
						<div className="d-grid gap-2 d-md-block ">
							<button type="button" className="btn btn-outline-success me-2" onClick={()=>navigate(`/editar-contacto/${contact.id}` )}><span><i className="fa-solid fa-pencil"></i></span></button>
							<ContactDelete id = {contact.id} showAgenda = {showAgenda}/>
							
						</div>
					  </div>
					</div>
				  </div>
				))}
			  </div>
			</>
		  );
		}