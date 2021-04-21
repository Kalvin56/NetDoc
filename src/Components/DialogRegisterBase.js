import React from "react";
import { TextField } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import frLocale from "date-fns/locale/fr";

function DialogRegisterBase({register, handleRegisterChange}) {
    return (
        <React.Fragment>
            <div className='div-form'>
              <TextField label="Prénom" variant="outlined" className="text-form-mid" value={register.name} onChange={(event) => handleRegisterChange(event,"name")} />
              <TextField label="Nom" variant="outlined" className="text-form-mid" value={register.lastname} onChange={(event) => handleRegisterChange(event,"lastname")} />
            </div>
            <div className='div-form'>
              <MuiPickersUtilsProvider fullWidth utils={DateFnsUtils} locale={frLocale}>
                <KeyboardDatePicker fullWidth format="dd/MM/yyyy" inputVariant="outlined" label="Date de naissance" value={register.birth} onChange={(event) => handleRegisterChange(event,"birth")}></KeyboardDatePicker>
              </MuiPickersUtilsProvider>
            </div>
            <div className='div-form'>
              <TextField label="Mot de passe" type="password" variant="outlined" fullWidth value={register.password} onChange={(event) => handleRegisterChange(event,"password")} />
            </div>
            <div className='div-form'>
              <TextField label="Confirmation mot de passe" variant="outlined" fullWidth value={register.confirm_password} onChange={(event) => handleRegisterChange(event,"confirm_password")} />
            </div>
            <div className='div-form'>
              <TextField label="Email" variant="outlined" fullWidth value={register.email} onChange={(event) => handleRegisterChange(event,"email")} />
            </div>
            <div className='div-form'>
              <TextField label="Téléphone" variant="outlined" fullWidth value={register.phone} onChange={(event) => handleRegisterChange(event,"phone")} />
            </div>
        </React.Fragment>
    );
}

export default DialogRegisterBase;