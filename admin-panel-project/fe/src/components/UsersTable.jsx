import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Divider, Grid } from "@mui/material";
export default function UsersTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "number", headerName: "Number", width: 130 },
    { field: "address", headerName: "Address", width: 130 },
    { field: "password", headerName: "Password", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
  ];
  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      email: "awesome@gmail.com",
    },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <h5>BreadCrumbs here</h5>
      <Typography
        variant="h4"
        color="initial"
        textAlign="left"
        orientation="horizontal"
      >
        Users
      </Typography>

      <Grid display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          textAlign="left"
          orientation="horizontal"
        >
          NEW
        </Button>
        <Button
          variant="contained"
          color="primary"
          textAlign="right"
          orientation="horizontal"
        >
          ADD FILTER
        </Button>
      </Grid>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
