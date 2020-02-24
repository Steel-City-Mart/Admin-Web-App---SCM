import React from 'react';
import { List, Datagrid, TextField} from 'react-admin';

export const UserList = (props) => (
<List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="created_by" />
            <TextField source="email_id" />
            <TextField source="contact_number" />
            <TextField source="membership" />
            <TextField source="role" />
            <TextField source="passwd_hash" />
            <TextField source="createdAt" />
            <TextField source="updatedAt" />
        </Datagrid>
    </List>
);