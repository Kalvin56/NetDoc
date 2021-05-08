import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MdClose } from "react-icons/md";
import DialogContent from '@material-ui/core/DialogContent';
import React from 'react';
import DialogRegisterBase from './DialogRegisterBase';
import DialogRegisterPlus from './DialogRegisterPlus';
import Alert from '@material-ui/lab/Alert';
import { CircularProgress } from "@material-ui/core";


function DialogRegister({domains, loading, success, erreur, patient, handlePatient, handleCloseLog, register, handleRegisterChange, handleRegisterPage, handleRegister}) {

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
          <form className='form' onSubmit={handleRegister}>
            <DialogRegisterBase register={register} handleRegisterChange={handleRegisterChange}></DialogRegisterBase>
            {patient ? "" : <DialogRegisterPlus domains={domains} register={register} handleRegisterChange={handleRegisterChange}></DialogRegisterPlus>}
            {erreur ? <div className='div-form'> <Alert severity="error">{erreur}</Alert> </div> : ""}
            {success ? <div className='div-form'> <Alert severity="success">Compte créé avec succès !</Alert> </div> : ""}
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