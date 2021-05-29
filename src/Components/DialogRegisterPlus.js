import React from "react";
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { CircularProgress } from "@material-ui/core";

function DialogRegisterPlus({domains, register, handleRegisterChange}) {

    if(domains && domains.length > 0){

        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;

        const MenuProps = {
            PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
            },
        };

        return (
            <React.Fragment>
                <div className='div-form'>
                <TextField label="Adresse" variant="outlined" fullWidth value={register.place} onChange={(event) => handleRegisterChange(event,"place")} />
                </div>
                <div className='div-form'>
                <TextField label="Ville" variant="outlined" fullWidth value={register.city} onChange={(event) => handleRegisterChange(event,"city")} />
                </div>
                <div className='div-form'>
                    <FormControl fullWidth>
                        <InputLabel id="spec-label">Spécialité</InputLabel>
                        <Select
                        labelId="spec-label"
                        id="spec"
                        multiple
                        value={register.domain}
                        onChange={(event) => handleRegisterChange(event,"domain")}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                        >
                        {domains.map((domain, index) => (
                            <MenuItem key={index} value={domain.domain_name}>
                            {domain.domain_name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
            </React.Fragment>
        );

    }else{
        return(<div className="center-elem"><CircularProgress/></div>)
    }
}

export default DialogRegisterPlus;