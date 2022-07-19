import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TextField } from '@mui/material';
import { useState } from 'react'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditDialog({open, handleClose, todo, editItem}) {
  const [editText, setEditText] = useState(todo.text)

  const textHandler = () => {
    editItem(todo.id, editText)
    handleClose()
  }

  return (

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Editar a tarefa"}</DialogTitle>
        <DialogContent>
         <TextField defaultValue={editText} onChange={(e) => setEditText(e.target.value)} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={textHandler}>Confirmar</Button>
        </DialogActions>
      </Dialog>

  );
}
