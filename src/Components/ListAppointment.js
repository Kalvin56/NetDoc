import { CircularProgress } from "@material-ui/core";
import 'moment/locale/fr';
import Moment from 'react-moment';
import { IoTrashBin } from "react-icons/io5";

function ListAppointment({data, isLoading, deleteAppointment}) {
    if(!data && !isLoading){
        return(<span>hey</span>);
    }else if(isLoading){
        return(<CircularProgress />);
    }else{
        // moment.locale('fr');

        var color = "grey";

        function statusString(statusInt, patient=""){
            switch (statusInt) {
                case 1:
                    return 'Disponible';
                case 2:
                    color = "#cc3300";
                    let valeur = "";
                    patient !== "" ? valeur = 'Annulé - ' + patient : valeur = 'Annulé';
                    return valeur;
                case 3:
                    color = "#99cc33";
                    return 'RDV avec :' + patient;          
                default:
                    break;
            }
        }

        const styleStatus = {
            backgroundColor : color
        }  

        return (
            <div>
                <div className='list-appoint'>
                    {data.map((dt,index) => (
                        <div className='list-appoint-elem flex-between' key={index}>
                            <div>
                                <div>
                                    <Moment format="D MMM YYYY" locale="fr">{dt.appointment_date}</Moment>
                                    &nbsp;&nbsp;
                                    <Moment format="H:mm" locale="fr">{dt.appointment_time}</Moment>
                                </div>
                                <div>
                                    <div className="status-appoint" style={styleStatus}>
                                        {statusString(dt.appointment_status)}
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