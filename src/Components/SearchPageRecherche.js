import './CSS/SearchPageRecherche.scss';
import { FaCity, FaNotesMedical } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Button from '@material-ui/core/Button';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
import { config } from '../config.js';
// import ListPageRechercheDialog from './ListPageRechercheDialog';
import DialogStructure from './DialogStructure';

function SearchPageRecherche({spec, city, handleClickSpec, handleClickCity, searchText,handleChange,placeHolder}) {

    const [dataDomainsState, setDataDomainsState] = useState({
        loading: false,
        data: null
    });

    const [dataCitiesState, setDataCitiesState] = useState({
        loading: false,
        data: null
    });

    const [openSpec, setOpenSpec] = useState(false);
    const [openCity, setOpenCity] = useState(false);
    
    useEffect(() => {
        setDataDomainsState({ loading: true});
        const apiUrl = config.apiUrl + `domains`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setDataDomainsState({ loading: false, data: data });
            });
    }, [setDataDomainsState]);

    useEffect(() => {
        setDataCitiesState({ loading: true});
        const apiUrl = config.apiUrl + `professionals/cities`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setDataCitiesState({ loading: false, data: data });
            });
    }, [setDataCitiesState]);


    function handleClickOpenSpec(){
        setOpenSpec(true);
    }

    function handleCloseSpec(e){
        e.preventDefault();
        setOpenSpec(false);
    }

    function handleClickOpenCity(){
        setOpenCity(true);
    }

    function handleCloseCity(e){
        e.preventDefault();
        setOpenCity(false);
    }

    


    return (
        <div className='block-search-page flex'>
            <input type="search" className='search-page' placeholder={placeHolder} value={searchText} onChange={handleChange}/>
            <button onClick={handleClickOpenCity} className='btn-s flex-center'><span><FaCity className='icon-s'/></span><span className='text-s'>Ville</span></button>
            <button onClick={handleClickOpenSpec} className='btn-s flex-center'><span><FaNotesMedical className='icon-s'/></span><span className='text-s'>Spécialité</span></button>
            {/* <Dialog open={openSpec} onClose={handleCloseSpec} fullWidth>
                <form className='form' onSubmit={handleCloseSpec}>
                    <DialogTitle>Spécialité</DialogTitle>
                    <DialogContent>
                        <ListPageRechercheDialog spec={spec} handleClick={handleClickSpec} data={dataDomainsState.data} isLoading={dataDomainsState.loading}></ListPageRechercheDialog>
                    </DialogContent>
                    <DialogActions>
                        <input type="submit" value="close"/>
                    </DialogActions>
                </form>
            </Dialog> */}
            <DialogStructure data={dataDomainsState} handleClick={handleClickSpec} attr={spec} open={openSpec} handleClose={handleCloseSpec} title="Spécialité" field="spec"></DialogStructure>
            <DialogStructure data={dataCitiesState} handleClick={handleClickCity} attr={city} open={openCity} handleClose={handleCloseCity} title="Villes" field="city"></DialogStructure>
        </div>
    );
}

export default SearchPageRecherche;