//To generate a table with pagination
//npm i react-custom-table
import React from 'react';
import { TableContainer, Table, Paginator } from 'react-custom-table';

<TableContainer
    columns={[
    	{id: "name", title: "Name"},
    	{id: "gender", title: "Gender"}
    ]}
    rows={[
    	{id: "1", name: "David", gender: "Male"},
        {id: "2", name: "Kelly", gender: "Female"},
        {id: "3", name: "James", gender: "Male"},
        {id: "4", name: "Tim", gender: "Male"}
    ]}>

    <Table/>

    <Paginator total={7} pageSize={4} />
</TableContainer>
