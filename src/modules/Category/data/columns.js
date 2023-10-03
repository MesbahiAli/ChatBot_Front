import { Button, Stack } from "@mui/material";

const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 98,
      headerClassName : "fd-tc-b-header"

    },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      headerClassName : "fd-tc-b-header"

    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      headerClassName : "fd-tc-b-header"

    },
    {
      field: 'age',
      headerName: 'Age',
      width: 100,
      headerClassName : "fd-tc-b-header"

    },
    {
      field: 'city',
      headerName: 'City',
      width: 150,
      headerClassName : "fd-tc-b-header"

    },
    {
      field: 'country',
      headerName: 'Country',
      width: 150,
      headerClassName : "fd-tc-b-header"

    },
    {
      field: 'company',
      headerName: 'Company',
      width: 200,
      headerClassName : "fd-tc-b-header"

    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
      headerClassName : "fd-tc-b-header"
    },
    {
        field: 'tone',
        headerName: 'Tone',
        width: 150,
        headerClassName : "fd-tc-b-header"
      },
      {
        field: 'home',
        headerName: 'Home',
        width: 150,
        headerClassName : "fd-tc-b-header"
      },
      {
        field: 'rome',
        headerName: 'Rome',
        width: 150,
        headerClassName : "fd-tc-b-header"
      },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        headerClassName : "fd-tc-b-header",
        renderCell: (params) => {
            const onClick = (e) => {
              const currentRow = params.row;
              return alert(JSON.stringify(currentRow, null, 4));
            };
            
            return (
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="warning" size="small" >Edit</Button>
                <Button variant="contained" color="error" size="small" >Delete</Button>
              </Stack>
            );
        },
      },
      
  ];
  
  export { columns };