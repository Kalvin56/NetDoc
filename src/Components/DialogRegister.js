import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MdClose } from "react-icons/md";
import DialogContent from '@material-ui/core/DialogContent';
import { DialogTitle, TextField } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { OutlinedInput, InputLabel, FormControl } from '@material-ui/core';
import frLocale from "date-fns/locale/fr";
import DialogRegisterBase from './DialogRegisterBase';
import DialogRegisterPlus from './DialogRegisterPlus';
import { CgSwapVertical } from "react-icons/cg";
import InputAdornment from '@material-ui/core/InputAdornment';
import Alert from '@material-ui/lab/Alert'
import { CircularProgress } from "@material-ui/core";


function DialogRegister({loading, success, erreur, patient, handlePatient, handleCloseLog, register, handleRegisterChange, handleRegisterPage, handleRegister}) {

    const styles = (theme) => ({
      root: {
        margin: 0,
        padding: theme.spacing(2),
      },
      closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
    });

    const DialogTitle = withStyles(styles)((props) => {
      const { children, classes, onClose, ...other } = props;
      return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h6">
            {children}
            <IconButton
              aria-label="toggle password visibility"
              onClick={handlePatient}
              /* onMouseDown={handleMouseDownPassword} */
            >
              {patient ? <span className='change-patient'>Médecin</span> : <span className='change-patient'>Patient</span>}
            </IconButton>
          </Typography>
          {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
              <MdClose />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
      );
    });
      

    return (
      <React.Fragment>
        <DialogTitle onClose={handleCloseLog} className="dialog-title">Inscription / {patient ? "Patient" : "Médecin"} {/* <button onClick={handlePatient} className='btn-change-patient'><CgSwapVertical></CgSwapVertical></button> */}
        </DialogTitle>
        <DialogContent>
          {erreur ? <div className='div-form'> <Alert severity="error">{erreur}</Alert> </div> : ""}
          {success ? <div className='div-form'> <Alert severity="success">Compte créé avec succès !</Alert> </div> : ""}
          <form className='form' onSubmit={handleRegister}>
            <DialogRegisterBase register={register} handleRegisterChange={handleRegisterChange}></DialogRegisterBase>
            {patient ? "" : <DialogRegisterPlus register={register} handleRegisterChange={handleRegisterChange}></DialogRegisterPlus>}
            <div className='div-form'>
                <button onClick={handleRegister} className="btn-log flex-center"><span>S'inscrire</span>{loading ? <CircularProgress size='22px' color="light" className='btn-load' /> : ""}</button>
            </div>
            <div className='div-form'>
                <button onClick={handleRegisterPage} className="btn-log btn-reg">Se connecter</button>
            </div>
          </form>
        </DialogContent>
      </React.Fragment>
    );
}

export default DialogRegister;