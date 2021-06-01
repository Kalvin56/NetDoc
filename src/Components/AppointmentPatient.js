import { IoCalendar } from "react-icons/io5";
import ListAppointment from './ListAppointment';

function AppointmentPatient({ appointments, deleteAppointment, erreurAppoint}) {

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
                <div className="profil-appoint-list">
                    <br />
                    <ListAppointment data={appointments.data} isLoading={appointments.loading} deleteAppointment={deleteAppointment} erreurAppoint={erreurAppoint} type="patient" />
                </div>
            </div>
        </div>
    );
}

export default AppointmentPatient;