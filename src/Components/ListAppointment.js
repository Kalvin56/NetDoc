import { CircularProgress } from "@material-ui/core";
import 'moment/locale/fr';
import Moment from 'react-moment';

function ListAppointment({data, isLoading}) {
    if(!data && !isLoading){
        return(<span>hey</span>);
    }else if(isLoading){
        return(<CircularProgress />);
    }else{
        // moment.locale('fr');
        return (
            <div>
                <div className='list-appoint'>
                    {data.map((dt,index) => (
                        <div className='list-appoint-elem' key={index}>
                            <Moment format="D MMM YYYY" locale="fr">{dt.appointment_date}</Moment>
                            &nbsp;&nbsp;
                            <Moment format="H:mm" locale="fr">{dt.appointment_time}</Moment>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListAppointment;