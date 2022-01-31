import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Profile = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getObj(params.id, params.type);
    }, [])
    console.log(store.obj);
    return (
        <div>
            <h1>Profile of {store.obj ? (params.type==="people" ? store.obj.result.description : params.type==="planets" ? store.obj.result.description : params.type==="vehicles" && store.obj.result.description):"loading..."} of id {params.id} </h1>
        </div>
    )
}
export default Profile;