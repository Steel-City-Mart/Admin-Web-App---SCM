import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { ProductList } from './productList.js';
import { UserList } from './userList.js';

const App = () => (
    <Admin dataProvider={jsonServerProvider('http://34.82.33.87:5000/api')}>
        <Resource name="getProducts" list={ProductList} />
        <Resource name="getUsers" list={UserList} />
    </Admin>
);

export default App;