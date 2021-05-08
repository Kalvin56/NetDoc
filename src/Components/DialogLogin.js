import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MdClose } from "react-icons/md";
import DialogContent from '@material-ui/core/DialogContent';
import { TextField, OutlinedInput, InputLabel, FormControl } from '@material-ui/core';
import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MdVisibility, MdVisibilityOff  } from "react-icons/md";
import { CircularProgress } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';




function DialogLogin({loading, success, erreur, patient, handlePatient, handleCloseLog, handleLogin, handleRegisterPage, handleLoginChange, login}) {

  const [showPassword, setShowPassword] = useState(false);
  
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
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <MdClose />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  function handleClickShowPassword(){
    if(!showPassword){
      setShowPassword(true);
    }else{
      setShowPassword(false);
    }
      
  }

  function handleMouseDownPassword(e){
    e.preventDefault()
  }

  const stylePatient = {
    backgroundColor : patient ? "#210482" : "white",
    color : patient ? "white" : "#210482"
  }

  const styleMedecin = {
    backgroundColor : !patient ? "#210482" : "white",
    color : !patient ? "white" : "#210482"
  }
  
  return (
      <React.Fragment>
        <DialogTitle onClose={handleCloseLog}>Connexion</DialogTitle>
        <DialogContent>
          <div className='div-form'>
            <button onClick={handlePatient} style={stylePatient} className="btn-patient">Patient</button><button style={styleMedecin} onClick={handlePatient}  className="btn-patient">Médecin</button>
          </div>
          <form className='form' onSubmit={handleLogin}>
              <div className='div-form'>
                  {/* <label htmlFor="email">Email</label>
                  <input type="email" pattern="[A-Za-z0-9éï]{6,15}" className='input-form' placeholder="Email" value={email} onChange={handleEmailChange} /> */}
                  <TextField label="Email" variant="outlined" fullWidth value={login.email} onChange={(event) => handleLoginChange(event,"email")} />
              </div>
              <p></p>
              <div className='div-form'>
                  {/* <label htmlFor="password">Mot de passe</label>
                  <input type="password" className='input-form' placeholder="Mot de passe" value={password} onChange={handlePasswordChange}/> */}
                  {/* <TextField label="Mot de passe" variant="outlined" fullWidth value={login.password} onChange={ (event) =>handleLoginChange(event,"password")} /> */}
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                    <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'} value={login.password} onChange={ (event) =>handleLoginChange(event,"password")} endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    } labelWidth={100}></OutlinedInput>
                  </FormControl>
              </div>
              {erreur ? <div className='div-form'> <Alert severity="error">{erreur}</Alert> </div> : ""}
              {success ? <div className='div-form'> <Alert severity="success">Connexion réussie !</Alert> </div> : ""}
              <div className='div-form'>
                  <button onClick={handleLogin} className="btn-log flex-center"><span>Se connecter</span>{loading ? <CircularProgress size='22px' color="light" className='btn-load' /> : ""}</button>
              </div>
              <div className='div-form'>
                  <button onClick={handleRegisterPage} className="btn-log btn-reg">S'inscrire {patient ? "(Patient)" : "(Médecin)"}</button>
              </div>
          </form>
            {/* <form className='form' onSubmit={handleCloseLog}>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" name="password" id="password"/>
                </div>
            </form> */}
        </DialogContent>
      </React.Fragment>
  );
}

export default DialogLogin;