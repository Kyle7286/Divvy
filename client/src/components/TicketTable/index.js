/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

  import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
  import React, { useState, useEffect } from "react";
  import ManageTicketModal from "../ManageTicketModal";
  import CreateTicketModal from '../CreateTicketModal';
  
  

/* -------------------------------------------------------------------------- */
/*                     Define Employee Table SubComponents                    */
/* -------------------------------------------------------------------------- */

/* ------------------- Global Filter (Search Bar) Subcomponent ------------------ */

  // Define a default UI for filtering
  function GlobalFilter({
      globalFilter,
      setGlobalFilter,
    }) {
      const [value, setValue] = React.useState(globalFilter)
      const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
      }, 200)

      // This is the UI Component to Return for the search
      return (
            <form>
                <div id="searchHelp" className="form-text text-center">Type to search, or select a column header to sort</div> 
                <div className=" mt-2 mb-1 col-5 mx-auto">
                      <label className="visually-hidden">Search</label>
                      <div className="input-group input-group-sm d-flex justify-content-center">
                          <span className="me-3 align-middle d-flex align-items-center text-primary"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                          </span>
                          <input className="form-control" value={value || ""} onChange={e => {setValue(e.target.value); onChange(e.target.value); }} placeholder={`Search`}/> 
                      </div>
                </div>
            </form>
      )
    }

  /* --------------------------- Table Subcomponent --------------------------- */

  function Table({columns,data,allUsers}) {

      // Setup the filtertypes
      const filterTypes = React.useMemo(
          () => ({
          text: (rows, id, filterValue) => {
              return rows.filter(row => {
              const rowValue = row.values[id]
              return rowValue !== undefined
                  ? String(rowValue)
                      .toLowerCase()
                      .startsWith(String(filterValue).toLowerCase())
                  : true
              })
          },
          }),
          []
      )

    // Setup Default Column (Default Filter UI)
    const defaultColumn = React.useMemo(
      () => ({
        Filter: GlobalFilter,
      }),
      []
    )

    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      preGlobalFilteredRows,
      setGlobalFilter,
    } = useTable(
      {
        columns,
        data,
        defaultColumn, 
        filterTypes,
      },
      useFilters, 
      useGlobalFilter,
      useSortBy
    )

    // Render the UI for the table, using bootstrap classes
    return (
      <div className="mx-1">
        <div>
            <GlobalFilter className="d-inline"
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <CreateTicketModal
              allUsers={allUsers}
            />
        </div>
        <table {...getTableProps()} className="table align-middle shadow-sm mt-2">
          <thead>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr className="table-info" {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props and ad in props to control sorting
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {// Render the header and add sort direction indicator
                    column.render('Header')}
                    <span>
                      {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {rows.map((row, i) => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {// Loop over the rows cells
                  row.cells.map(cell => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {// Render the cell contents
                        cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      )
  }

/* -------------------------------------------------------------------------- */
/*                 Define Main Component For Exporting Default                */
/* -------------------------------------------------------------------------- */


  function TicketTable(props) {

    // Map through tickets and create a new object array matching my table accessors order and names
    let ticket = props.allTickets.map (ticket => 
      (
        {
          button:<ManageTicketModal
                    allUsers={props.allUsers} 
                    ticketTitle={ticket.title} 
                    ticketPriority={ticket.priority}
                    ticketStatus={ticket.status}
                    ticketAssignee={ticket.ticketuser ? `${ticket.ticketuser.first_name} ${ticket.ticketuser.last_name}`:""}
                    ticketAssigneeId={ticket.ticketuser ? ticket.ticketuser.id:""}
                    ticketDescription={ticket.description}
                    ticketID={ticket.id}
                    ticketFirm={ticket.client.name}
                    ticketFirmContact={ticket.client.contact[0] ? `${ticket.client.contact[0].first_name} ${ticket.client.contact[0].last_name}`:""}
                    ticketFirmPhone={ticket.client.contact[0] ? ticket.client.contact[0].phone_number:"" }
                  />,
          id:ticket.id,
          title: ticket.title,
          firm: ticket.client.name, 
          contact_name: ticket.client.contact[0] ? `${ticket.client.contact[0].first_name} ${ticket.client.contact[0].last_name} ` : "" ,
          contact_phone: ticket.client.contact[0] ? ticket.client.contact[0].phone_number : "" ,
          priority: ticket.priority,
          status: ticket.status,
          assignee: ticket.ticketuser ? `${ticket.ticketuser.first_name} ${ticket.ticketuser.last_name} ` : ""
        }
      )
    );

    // Define columns for table
    const columns = React.useMemo(
      () => [
        {
          Header:"",
          accessor:"button"
        },
        {
          Header: 'ID',
          accessor: 'id', // accessor is the "key" in the data to use below
        },
        {
          Header: 'Title',
          accessor: 'title', 
        },
        {
          Header: 'Firm',
          accessor: 'firm',
        },
        {
          Header: 'Contact Name',
          accessor: 'contact_name',
        },
        {
          Header: 'Contact Phone',
          accessor: 'contact_phone',
        },
        {
          Header: 'Priority',
          accessor:'priority',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
        {
          Header: 'Assignee',
          accessor: 'assignee',
        },
      ],
      []
    )

    // Define data for table
      // //eslint-disable-next-line
      const data = React.useMemo(() => ticket);

     
    // Return the Table With Data For Rendering and the Search Filter
      return (
        <div>
          <Table 
            columns={columns} 
            data={data}
            allUsers={props.allUsers}
            />
        </div>
      )

  }

  /* -------------------------------------------------------------------------- */
  /*                              Export Component                              */
  /* -------------------------------------------------------------------------- */

      export default TicketTable;
