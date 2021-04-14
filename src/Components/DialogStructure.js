import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ListPageRechercheDialog from './ListPageRechercheDialog';


function DialogStructure({data,handleClick,attr,open,handleClose, title, field}) {

    if(!data){
        return(<span></span>);
    }else{
        return (
            <Dialog open={open} onClose={handleClose} fullWidth>
                <form className='form' onSubmit={handleClose}>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogContent>
                        <ListPageRechercheDialog attr={attr} handleClick={handleClick} data={data.data} isLoading={data.loading} field={field}></ListPageRechercheDialog>
                    </DialogContent>
                    <DialogActions>
                        <input type="submit" value="close"/>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }
}

export default DialogStructure;