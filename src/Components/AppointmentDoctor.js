import { withStyles } from '@material-ui/core/styles';
import { IoCalendar } from "react-icons/io5";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MdClose } from "react-icons/md";
import DialogContent from '@material-ui/core/DialogContent';
import { TextField, OutlinedInput, InputLabel, FormControl } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MdVisibility, MdVisibilityOff  } from "react-icons/md";
import { CircularProgress } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { MuiPickersUtilsProvider, KeyboardDatePicker, TimePicker, DateTimePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import frLocale from "date-fns/locale/fr";
import ListAppointment from './ListAppointment';

function AppointmentDoctor({newAvailabilitie, handleClickOpenAvail, handleCloseAvail, openDialogAvail, availabilitie, handleAvailabilitieChange, erreur, success, loading, appointments, deleteAppointment, erreurAppoint}) {

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

    return (
        <div className="profil-appoint-block">
            <div className="profil-appoint-block-top flex">
                <div>
                    <IoCalendar className="calendar-appoint"/>
                </div>
                <div className='profil-infos-name'>
                    Rendez-vous
                </div>
            </div>
            <div className="profil-appoint-block-content" id="bar">
                <div className="profil-appoint-availabilities flex-center">
                    <button className="button-appoint-availabilities" onClick={handleClickOpenAvail}>+ Nouvelle disponibilité</button>
                    <Dialog open={openDialogAvail} fullWidth>
                        <DialogTitle onClose={handleCloseAvail}>Nouvelle disponibilité</DialogTitle>
                        <DialogContent>
                        <form className='form' onSubmit={newAvailabilitie}>
                            <div className='div-form'>
                                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                                    <DateTimePicker fullWidth format="dd/MM/yyyy HH:mm" value={availabilitie.date} inputVariant="outlined" label="Date" onChange={(event) => handleAvailabilitieChange(event,"date")} ampm={false} minutesStep={5} />
                                </MuiPickersUtilsProvider>
                            </div>
                            <div className='div-form'>
                                <TextField label="Durée (en minutes)" type="number" variant="outlined" fullWidth value={availabilitie.duration} onChange={(event) => handleAvailabilitieChange(event,"duration")} />
                            </div>
                            {erreur ? <div className='div-form'> <Alert severity="error">{erreur}</Alert> </div> : ""}
                            {success ? <div className='div-form'> <Alert severity="success">Ajout réussi !</Alert> </div> : ""}
                            <div className='div-form'>
                                <button onClick={newAvailabilitie} className="btn-log flex-center"><span>Ajouter</span>{loading ? <CircularProgress size='22px' color="light" className='btn-load' /> : ""}</button>
                            </div>
                        </form>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="profil-appoint-list">
                    <ListAppointment data={appointments.data} isLoading={appointments.loading} deleteAppointment={deleteAppointment} erreurAppoint={erreurAppoint} type="doctor" />
                </div>
            </div>
        </div>
    );
}

export default AppointmentDoctor;