import './CSS/SearchPageRecherche.scss';
import { FaCity, FaNotesMedical } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { config } from '../config.js';
import ListSearchPageRecherche from './ListSearchPageRecherche';

function SearchPageRecherche({spec,handleClick,searchText,handleChange,placeHolder}) {

    const [dataState, setDataState] = useState({
        loading: false,
        data: null
      });

    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        setDataState({ loading: true});
        const apiUrl = config.apiUrl + `domains`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setDataState({ loading: false, data: data });
            });
    }, [setDataState]);


    function handleClickOpen(){
        setOpen(true);
    }

    function handleClose(e){
        e.preventDefault();
        setOpen(false);
    }

    


    return (
        <div className='block-search-page flex'>
            <input type="search" className='search-page' placeholder={placeHolder} value={searchText} onChange={handleChange}/>
            <button className='btn-s flex-center'><span><FaCity className='icon-s'/> Ville</span></button>
            <button onClick={handleClickOpen} className='btn-s flex-center'><span><FaNotesMedical className='icon-s'/>Spécialité</span></button>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <form className='form' onSubmit={handleClose}>
                    <DialogTitle>Spécialité</DialogTitle>
                    <DialogContent>
                        <ListSearchPageRecherche spec={spec} handleClick={handleClick} data={dataState.data} isLoading={dataState.loading}></ListSearchPageRecherche>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <input type="submit" value="sub"/>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default SearchPageRecherche;