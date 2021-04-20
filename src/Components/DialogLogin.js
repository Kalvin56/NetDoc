import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MdClose } from "react-icons/md";
function DialogLogin({open, handleCloseLog}) {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[register, setRegister] = useState(false);

    function handleRegister(e){
        e.preventDefault();
        setRegister(true);
    }

    function handleEmailChange(e){
        let val = e.target.value;
        setEmail(val);
    }

    function handlePasswordChange(e){
        let val = e.target.value;
        setPassword(val);
    }
    

    function handleLogin(e){
        e.preventDefault();//empeche le formulaire de rafraichir la page
        console.log('hey');
    }

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

    if(!register){

        return (
            <Dialog open={open} fullWidth>
                <DialogTitle onClose={handleCloseLog}>Connexion</DialogTitle>
                <DialogContent>
                <form className='form' onSubmit={handleLogin}>
                    <div className='div-form'>
                        {/* <label htmlFor="email">Email</label>
                        <input type="email" pattern="[A-Za-z0-9éï]{6,15}" className='input-form' placeholder="Email" value={email} onChange={handleEmailChange} /> */}
                        <TextField label="Email" variant="outlined" fullWidth value={email} onChange={handleEmailChange} />
                    </div>
                    <p></p>
                    <div className='div-form'>
                        {/* <label htmlFor="password">Mot de passe</label>
                        <input type="password" className='input-form' placeholder="Mot de passe" value={password} onChange={handlePasswordChange}/> */}
                        <TextField label="Mot de passe" variant="outlined" fullWidth value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className='div-form'>
                        <button onClick={handleLogin} className="btn-log">Se connecter</button>
                    </div>
                    <div className='div-form'>
                        <button onClick={handleRegister} className="btn-log btn-reg">S'inscrire</button>
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
            </Dialog>
        );

    }else{
        return (
            <Dialog open={open} fullWidth>
                <DialogTitle onClose={handleCloseLog}>Inscription</DialogTitle>
                <DialogContent>
                <form className='form' onSubmit={handleLogin}>
                    <div className='div-form'>
                        {/* <label htmlFor="email">Email</label>
                        <input type="email" pattern="[A-Za-z0-9éï]{6,15}" className='input-form' placeholder="Email" value={email} onChange={handleEmailChange} /> */}
                        <TextField label="Email" variant="outlined" fullWidth value={email} onChange={handleEmailChange} />
                    </div>
                    <p></p>
                    <div className='div-form'>
                        {/* <label htmlFor="password">Mot de passe</label>
                        <input type="password" className='input-form' placeholder="Mot de passe" value={password} onChange={handlePasswordChange}/> */}
                        <TextField label="Mot de passe" variant="outlined" fullWidth value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className='div-form'>
                        <button onClick={handleLogin} className="btn-log">Se connecter</button>
                    </div>
                    <div className='div-form'>
                        <button onClick={handleRegister} className="btn-log btn-reg">S'inscrire</button>
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
            </Dialog>
        );
    }
}

export default DialogLogin;