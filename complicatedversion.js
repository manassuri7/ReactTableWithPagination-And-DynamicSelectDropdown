import React from 'react';
import { TableContainer, Table, Paginator } from 'react-custom-table';

const columns = [
    {id: "name", title: "Name", sortable: true},
    {id: "gender", title: "Gender", template: (v) => <b style={{color: v.gender === "Male" ? 'blue' : 'pink'}}>{v.gender}</b>},
    {id: "age", title: "Age", sortable: true},
    {id: "height", title: "Height", sortable: false}
]
const pageData = [
    {id: "1", name: "David", gender: "Male", age: "17", height: "176"},
    {id: "2", name: "Kelly", gender: "Female", age: "19", height: "180"},
    {id: "3", name: "James", gender: "Male", age: "12", height: "150"},
    {id: "4", name: "Tim", gender: "Male", age: "39", height: "180"}
]

<TableContainer
    containerClass="table-responsive"
    columns={columns}
    rows={pageData}
    onSort={this.handleSort}
    onPageChange={this.handlePageClick}>

    <Table
        tableClass="table table-bordered table-hover"
        sortableClass="sortable"
        sortDescClass="desc"
        sortAscClass="asc"
        selectedRowClass="selected-row"
        selectable={true}
        selectColumnTemplate={(v) => <input type='checkbox' checked={v}/>}
        selectAllTemplate={(v) => <input type='checkbox' checked={v}/>}/>

    <Paginator
        paginatorClass="pagination pull-right"
        total={7}
        firstPageTemplate={() => <a>{"<<"}</a>}
        prevPageTemplate={() => <a>{"<"}</a>}
        pageTemplate={(p) => <a>{p}</a>}
        nextPageTemplate={() => <a>{">"}</a>}
        lastPageTemplate={() => <a>{">>"}</a>}
        pageSize={4}/>

</TableContainer>
