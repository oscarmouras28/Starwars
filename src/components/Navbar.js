import { clear } from '@testing-library/user-event/dist/clear';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
const Navbar = () => {
    const { store, actions } = useContext(Context);
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/">
                                <img src="https://w7.pngwing.com/pngs/656/498/png-transparent-millennium-falcon-illustration-millennium-falcon-star-wars-stencil-millennium-falcon-thumbnail.png" alt="" width="30" height="24" />
                            </Link >
                        </li>
                    </ul>
                    <div className="btn-group">
                        <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" data-bs-placement="left" aria-expanded="false">
                            Favoritos
                        </button>
                        <ul className="dropdown-menu dropdown-menu-start bd-highlight mb-3">
                            {store.fav?.map(favo => {
                                return (
                                    <li className="dropdown-item">{favo}
                                        <button type="button" className="btn btn-danger" onClick={()=>{
                                        const getIndex = (element)=>element ===favo;
                                        actions.deleteFav(store.fav.findIndex(getIndex))
                                    }}>x</button>
                                    </li>                                    
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>;
}
export default Navbar;