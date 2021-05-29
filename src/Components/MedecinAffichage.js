import { CircularProgress } from "@material-ui/core";
import { BsPersonSquare } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import 'moment/locale/fr';
import Moment from 'react-moment';
import { IoTimeSharp } from "react-icons/io5";
import Alert from '@material-ui/lab/Alert';

function MedecinAffichage({data, isLoading, takeAppointment, erreurTake, successTake}) {
    // console.log(data);
    // console.log(isLoading);
    if(!data && !isLoading){
        return(<span></span>);
    }else if(isLoading){
        return(<div className="center-elem"><CircularProgress/></div>)
    }else{
        return (
            <div className="block-medecin">
                <div className="elem-search-medecin">
                    <div className='flex'>
                        <BsPersonSquare className='icon-person-medecin'></BsPersonSquare>
                        <div>
                            <span className='name-medecin'>{data.infos.doctor_complete_name}</span>
                            <p></p>
                            <span className='domain'>{data.infos.doctor_domain_id.map((dom, index) => (
                                (index > 0 ? ' / ' : ' ')  + dom.domain_name 
                            ))}
                            </span>
                            <p></p>
                            <p className='place'>
                                <MdPlace className="icon-place-medecin"></MdPlace>
                                &nbsp;
                                {data.infos.doctor_place}
                                &nbsp;/&nbsp;
                                {data.infos.doctor_city}
                            </p>
                        </div>
                    </div>
                    <div className="infos-more">
                        <p>Téléphone : {data.infos.doctor_phone}</p>
                        <p>Email : {data.infos.user.email}</p>
                        <p>Informations supplémentaires : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus impedit esse eligendi reprehenderit earum enim exercitationem, aut ipsam sapiente voluptatum fugiat aspernatur porro odio expedita animi, veritatis beatae voluptate quis?</p>
                    </div>
                </div>
                <div className="appointments">
                    <p>Rendez-vous disponible(s) :</p>
                    {data.appointments.map((dt,index) => (
                        <div className='list-appoint-elem-medecin flex-between' key={index}>
                            <div>
                                <div className="flex" >
                                    <Moment format="D MMM YYYY" locale="fr">{dt.appointment_date}</Moment>
                                    &nbsp;&nbsp;
                                    <Moment format="H:mm" locale="fr">{dt.appointment_date}</Moment>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <IoTimeSharp></IoTimeSharp>
                                    {dt.appointment_duration}
                                    
                                </div>
                            </div>
                            <div>
                                <div className="delete-appoint">
                                    <button onClick={() =>takeAppointment(dt.id)}>Prendre le RDV</button>
                                </div>
                                {erreurTake ? <div className='div-form'> <Alert severity="error">{erreurTake}</Alert> </div> : ""}
                                {successTake ? <div className='div-form'> <Alert severity="success">{successTake}</Alert> </div> : ""}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MedecinAffichage;