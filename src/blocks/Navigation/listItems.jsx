import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StorageIcon from '@material-ui/icons/Storage';

export const primaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Arango-pod" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Cockroach-pod" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Postgres-pod" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Rethink-pod" />
    </ListItem>
  </div>
);