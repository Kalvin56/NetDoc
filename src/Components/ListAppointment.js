import { CircularProgress } from "@material-ui/core";
import 'moment/locale/fr';
import Moment from 'react-moment';
import { IoTrashBin, IoTimeSharp } from "react-icons/io5";

function ListAppointment({data, isLoading, deleteAppointment, erreurAppoint, type}) {
    if(!data && !isLoading){
        return(<div className="center-elem">{erreurAppoint}</div>);
    }else if(isLoading){
        return(<div className="center-elem"><CircularProgress/></div>);
    }else{
        function statusString(statusInt, patient=null, doctor = null){
            console.log(patient);
            switch (statusInt) {
                case 1:
                    return 'Disponible';
                case 2:
                    let valeur = "";
                    patient && type === "doctor" ? valeur = 'Annulé - ' + patient.patient_complete_name : valeur = 'Annulé';
                    doctor && type === "patient" ? valeur = 'Annulé - ' + doctor.doctor_complete_name : valeur = 'Annulé';
                    return valeur;
                case 3:
                    let res = "";
                    patient && type === "doctor" ? res = 'RDV avec : ' + patient.patient_complete_name : res = 'RDV';
                    doctor && type === "patient" ? res = 'RDV avec : ' + doctor.doctor_complete_name : res = 'RDV';
                    return res;          
                default:
                    break;
            }
        }

        function statusColor(statusInt){
            switch (statusInt) {
                case 1:
                    return {backgroundColor : "grey" };
                case 2:
                    return {backgroundColor : "#cc3300" };
                case 3:
                    return {backgroundColor : "#99cc33" };         
                default:
                    return {backgroundColor : "grey" };
            }
        }

        return (
            <div>
                <div className='list-appoint'>
                    {data.map((dt,index) => (
                        <div className='list-appoint-elem flex-between' key={index}>
                            <div>
                                <div className="flex" >
                                    <Moment format="D MMM YYYY" locale="fr">{dt.appointment_date}</Moment>
                                    &nbsp;&nbsp;
                                    <Moment format="H:mm" locale="fr">{dt.appointment_date}</Moment>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <IoTimeSharp></IoTimeSharp>
                                    {dt.appointment_duration}
                                    
                                </div>
                                <div>
                                    <div className="status-appoint" style={statusColor(dt.appointment_status)}>
                                        {statusString(dt.appointment_status, dt.appointment_patient, dt.appointment_doctor)}
                                    </div>
                                </div>
                            </div>
                            {dt.appointment_status !== 2 ?
                            <div>
                                <div className="delete-appoint">
                                    <IoTrashBin  onClick={() =>deleteAppointment(dt.id)} size="25"></IoTrashBin>
                                </div>
                            </div>
                            : ''}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListAppointment;