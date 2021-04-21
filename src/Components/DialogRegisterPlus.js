import React from "react";
import { TextField } from '@material-ui/core';

function DialogRegisterPlus({register, handleRegisterChange}) {
    return (
        <React.Fragment>
            <div className='div-form'>
              <TextField label="Adresse" variant="outlined" fullWidth value={register.password} onChange={(event) => handleRegisterChange(event,"password")} />
            </div>
        </React.Fragment>
    );
}

export default DialogRegisterPlus;