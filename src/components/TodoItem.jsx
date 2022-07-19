import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useState } from 'react'
import { Paper } from '@mui/material';
import EditDialog from './EditDialog';

  export default function TodoItem({todo, deleteItem, editItem}) {
    const [openDialog, setOpenDialog] = useState(false)

    const handleClose = () => {
      setOpenDialog(!openDialog)
    }

  
  return (
    <>
    <EditDialog editItem={editItem} open={openDialog}  handleClose={handleClose} todo={todo} />
    <Paper style={{ padding: '1rem' }} >
          <ListItem
            secondaryAction={
              <DeleteForeverOutlinedIcon style={{ cursor: 'pointer' }} edge="end" aria-label="delete" onClick={() => deleteItem(todo.id)}>
              </DeleteForeverOutlinedIcon>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  checked={todo.completed}
                  
                />
              </ListItemIcon>
              <ListItemText primary={todo.text} onClick={() => setOpenDialog(true)} />
            </ListItemButton>
          </ListItem>
          </Paper>
          </>
        );
      }
