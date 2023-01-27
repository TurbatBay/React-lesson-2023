import "./App.css";
import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import UpdateForm from "./components/UpdateForm";
const GET_DATA_URL = "http://localhost:8080/data";
const DELETE_DATA_URL = "http://localhost:8080/data";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [currentData, setCurrentData] = useState({});
  async function deleteData(data) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(DELETE_DATA_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }

  async function fetchData() {
    const FETCHED_DATA = await fetch(GET_DATA_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleDelete(id) {
    console.log(id);
    const data = {
      id: id,
    };
    deleteData(data);
  }

  function handleEdit(data) {
    console.log(data);
    setCurrentData(data);
    setIsOpenForm(true);
  }

  return (
    <div className="App">
      <h1>Day-51 - React/Express Fullstack APP - without Database</h1>

      <InputForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setData={setData}
      />
      {isOpenForm ? (
        <UpdateForm
          currentData={currentData}
          setCurrentData={setCurrentData}
          setData={setData}
        />
      ) : (
        <div></div>
      )}
      {isLoading
        ? "...Loading"
        : data &&
          data.map((d, index) => {
            return (
              <>
                <p key={index}>
                  {d.name} -- {d.major}
                </p>
                <button onClick={() => handleDelete(d.id)}>Delete</button>

                <button onClick={() => handleEdit(d)}>Edit</button>
              </>
            );
          })}
    </div>
  );
}

export default App;
