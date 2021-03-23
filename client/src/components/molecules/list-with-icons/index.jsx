import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '../../atoms';

const ListWithIcons = ({ items }) => (
  <List>
    {items.map((item) => (
      <ListItem key={item.key}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
        />
      </ListItem>
    ))}
  </List>
);

export default ListWithIcons;
