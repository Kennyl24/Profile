
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let harry = true;

const handleClose = () => {
  console.log('closing?')
  harry = false;
};

const TileModal = (props) => (
  <div>
  <Dialog
          open={harry}
          onClose={handleClose.bind(this)}
        >
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
             This modal is under constuction.  
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
);

export default TileModal;