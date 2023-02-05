import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Home from "./Home";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Stack from "@mui/joy/Stack";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import BreadCrumbs from "../components/BreadCrumbs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const productsData = [
  {
    id: 1,
    imgURL: "image",
    Title: "Boots",
    Subtitle: "Trainers in Blue",
    Price: "45",
    Rating: "4.6",
    Actions: "",
  },
];

export default function Products({
  currentProducts,
  setCurrentProducts,
  productUpdate,
  setProductUpdate,
}) {
  const [imageUrl, setImageUrl] = useState(null);
  const url = "http://localhost:8080/newProducts";
  const [users, setUsers] = useState([]);
  async function fetchScreen() {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();

    setUsers(FETCHED_JSON.data);

    return FETCHED_JSON;
  }
  useEffect(() => {
    fetchScreen();
  }, []);

  async function handleDelete(userId) {
    toast.success("User deleted", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(url, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleEdit(userId) {
    setProductUpdate(true);
    const filteredUser = users.filter((user) => user.id === userId)[0];
    if (filteredUser) {
      setCurrentProducts({
        ...currentProducts,
        id: filteredUser.id,
        imgURL: filteredUser.imgURL,
        title: filteredUser.title,
        subtitle: filteredUser.subtitle,
        price: filteredUser.price,
        discount: filteredUser.discount,
        description1: filteredUser.description1,
        description2: filteredUser.description2,
        code: filteredUser.code,
        hashtag: filteredUser.hashtag,
        technology: filteredUser.technology,
        rating: filteredUser.rating,
      });
    }
  }

  function handleSearch(e) {
    e.preventDefault();

    const filteredUser = users.filter(
      (user) => user.title === e.target.search.value
    );
    setUsers(filteredUser);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Home />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Stack direction="row" justifyContent="space-between">
          <BreadCrumbs sx={{ flexGrow: 1, p: 30 }} />

          <div>
            <Typography
              variant="h6"
              sx={{ margin: "5px", display: "inline-block" }}
            >
              Products
            </Typography>

            <Typography
              variant="caption"
              gutterBottom
              sx={{ color: "#9e9e9e" }}
            >
              {users.length} total
            </Typography>
          </div>
          <form onSubmit={handleSearch}>
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <TextField
              name="search"
              className="text"
              // onInput={(e) => {
              //   setSearchQuery(e.target.value);
              // }}
              label="Search"
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
          </form>
        </Stack>
        <Link to={"/newProducts"} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ margin: "10px" }}
            onClick={() => {}}
          >
            CREATE PRODUCT
          </Button>
        </Link>
        <Typography variant="h6" sx={{ margin: "15px" }}>
          Products
        </Typography>

        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ padding: 0 }}>
                  <Checkbox />
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Subtitle</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={0.5}>
                    <strong>Price</strong>
                  </Stack>
                </TableCell>

                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((parametr, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell sx={{ padding: 0 }}>
                    <Checkbox />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {parametr.id % 100}
                  </TableCell>
                  <TableCell>url</TableCell>
                  <TableCell>{parametr.title}</TableCell>
                  <TableCell>{parametr.subtitle}</TableCell>
                  <TableCell>
                    {`${parametr.price}` && `$${parametr.price}`}
                  </TableCell>

                  <TableCell sx={{ padding: 0 }}>
                    <Stack direction="row" spacing={1}>
                      <Link
                        to={"/newProducts"}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleEdit(parametr.id)}
                        >
                          Edit
                        </Button>
                        <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light"
                        />
                      </Link>

                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(parametr.id)}
                      >
                        Delete
                      </Button>
                      <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
