import React, { useState } from 'react'
import { Alert, Button, Paper, Snackbar, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';  

export default function Form({todoHandler}) {

  const [text, setText] = useState('')
  const [id, setId] = useState(0)
  const [open, setOpen] = React.useState(false);


  const [errorMessage, setErrorMessage] = useState(null)

  const createItem = (text) => {
    
    if(text == '') {
      setOpen(true);
    } else {
      const itemObject = {text: text, id: id}
      setId(id + 1)
      todoHandler(itemObject)
      setText('')
    }
  }

  return (
    <Paper style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      <TextField value={text} id="outlined-basic" fullWidth label="Digite a tarefa" variant="outlined" onChange={(e) => setText(e.target.value)}/>
      <Button variant="contained" onClick={ () => createItem(text)}>Adicionar</Button>
      </div>
      <Collapse in={open}>
        <Alert severity="error" style={{ marginTop: '.5rem', position: 'fixed', top:'0', left: '50%', transform: 'translateX(-50%)' }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Digite uma tarefa!
        </Alert>
      </Collapse>
    </Paper>
  )
}
