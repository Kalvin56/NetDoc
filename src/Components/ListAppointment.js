import { CircularProgress } from "@material-ui/core";

function ListAppointment({data, isLoading}) {
    if(!data && !isLoading){
        return(<span>hey</span>);
    }else if(isLoading){
        return(<CircularProgress />);
    }else{
        return (
            <div>
                <div className='list-appoint'>
                    {data.map((dt,index) => (
                        <div className='list-appoint-elem' key={index}>
                            {dt.appointment_date.split('T')[0]} {dt.appointment_time.split('T')[1].split('+')[0]}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListAppointment;