import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Home = () => {
    const { store, actions } = useContext(Context);
    const [type, setType] = useState("");
    useEffect(() => {
        actions.getPersonajes();
        actions.getPlanetas();
        actions.getVehiculos();
    }, [])
    return (
        <div className='container overflow-hidden '>
            <h1>Personajes</h1>
            {store.personajes.map(personaje =>
                <div className="card d-inline-block m-3" key={personaje.uid} style={{ width: "16rem" }}>
                    <img className="card-img-top" src={"https://w7.pngwing.com/pngs/386/163/png-transparent-faq-icon-question-mark-pics-angle-text-logo.png"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> {personaje.name} </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
                            <Link to={"/profile/people/" + personaje.uid} className="btn btn-primary">Go somewhere</Link>
                            <button className="btn btn-warning" onClick={()=>actions.getFav(personaje.name)}> fav </button>
                        </div>
                    </div>
                </div>
            )}
            <h1>Planetas</h1>
            {store.planetas.map(planeta =>
                <div className="card d-inline-block m-3" key={planeta.uid} style={{ width: "16rem" }}>
                    <img className="card-img-top" src={"https://w7.pngwing.com/pngs/386/163/png-transparent-faq-icon-question-mark-pics-angle-text-logo.png"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> {planeta.name} </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
                            <Link to={"/profile/people/" + planeta.uid} className="btn btn-primary">Go somewhere</Link>
                            <button className="btn btn-warning"> fav </button>
                        </div>
                    </div>
                </div>
            )}
            <h1>Vehiculos</h1>
            {store.vehiculos.map(vehiculo =>
                <div className="card d-inline-block m-3" key={vehiculo.uid} style={{ width: "16rem" }}>
                    <img className="card-img-top" src={"https://w7.pngwing.com/pngs/386/163/png-transparent-faq-icon-question-mark-pics-angle-text-logo.png"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> {vehiculo.name} </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
                            <Link to={"/profile/people/" + vehiculo.uid} className="btn btn-primary">Go somewhere</Link>
                            <button className="btn btn-warning"> fav </button>
                        </div>
                    </div>
                </div>
            )}
        </div>);
};
export default Home;