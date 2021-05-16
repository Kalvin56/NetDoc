import { IoCalendar } from "react-icons/io5";

function AppointmentDoctor(props) {
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
            <div className="profil-appoint-block-content">

            </div>
        </div>
    );
}

export default AppointmentDoctor;