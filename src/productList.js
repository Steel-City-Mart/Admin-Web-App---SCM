import React from 'react';
import { List, Datagrid, TextField} from 'react-admin';

export const ProductList = (props) => (
<List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="available_sku" />
            <TextField source="cat_id_l1" />
            <TextField source="cat_id_l2" />
            <TextField source="cat_id_l3" />
            <TextField source="reward_value" />
            <TextField source="supplier_id" />
            <TextField source="delivery_cat_id" />
            <TextField source="UOM" />
            <TextField source="uom_quantity" />
            <TextField source="CGST" />
            <TextField source="IGST" />
            <TextField source="SGST" />
            <TextField source="max_purchase_unit" />
            <TextField source="status" />
        </Datagrid>
    </List>
);