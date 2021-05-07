/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

  import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
  import React from "react";


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
          <div className="col-5 mx-auto mt-2 mb-1">
              <label className="visually-hidden">Search</label>
              <div className="input-group input-group-sm">
                  <span className="me-3 align-middle d-flex align-items-center text-primary"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
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

  function Table({columns,data}) {

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
      <>
        <div>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
        </div>
        <table {...getTableProps()} className="table align-middle">
          <thead>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr className="table-primary" {...headerGroup.getHeaderGroupProps()}>
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
      </>
      )
  }

/* -------------------------------------------------------------------------- */
/*                 Define Main Component For Exporting Default                */
/* -------------------------------------------------------------------------- */

  /*
    Eventually, I need to get tickets back as an array of objects
    from the db here, and map through like my example below to set
    data to pass the table to render

    firstly, I need to update the ticket table function to pass in props (right now
    I just left it blank for testing)

    Then use the below example as a guidline from my hw19 and create the array
    from props.

    // Check props
    console.log('props received from directory.js within EmployeeTable', props.results);


    // Define a new array of user objects to pass to my table
    let users = props.results.map (user => 
      (
        {
          image:<img src={user.picture.thumbnail} alt="employee profile"/>, 
          name: `${user.name.first} ${user.name.last}`,
          phone: user.phone,
          email: user.email,
          dob: user.dob.date
        }
      )
    );

  */

  function TicketTable() {

    // Define columns for table
    const columns = React.useMemo(
      () => [
        {
          Header: 'Title',
          accessor: 'title', // accessor is the "key" in the data to use below
        },
        {
          Header: 'ID',
          accessor: 'id',
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

      /*

        Here is what it looks like if passing an array of objects in- just match to headers. 
        When ready, need to use this with data passed in from DB for tickets

        //eslint-disable-next-line
        //const data = React.useMemo(() => users)

      */
  
          
      // Testing view with some seeded data based on latest model
      const data = React.useMemo(
        () => [
            {
              title: 'Ticket 1',
              id:'id1',
              firm:'firm1',
              contact_name: 'firm contact name 1',
              contact_phone: 'firm contact phone 1',
              priority: 'priority1',
              status: 'status1',
              assignee: 'assignee1'
            },
            {
              title: 'Ticket 2',
              id:'id2',
              firm:'firm2',
              contact_name: 'firm contact name 2',
              contact_phone: 'firm contact phone 2',
              priority: 'priority2',
              status: 'status2',
              assignee: 'assignee2'
            },
            {
              title: 'Ticket 1',
              id:'id1',
              firm:'firm1',
              contact_name: 'firm contact name 1',
              contact_phone: 'firm contact phone 1',
              priority: 'priority1',
              status: 'status1',
              assignee: 'assignee1'
            }
          ]
      )
          

    // Return the Table With Data For Rendering and the Search Filter
      return (
        <div>
          <Table columns={columns} data={data} />
        </div>
      )

  }

  /* -------------------------------------------------------------------------- */
  /*                              Export Component                              */
  /* -------------------------------------------------------------------------- */

      export default TicketTable;
