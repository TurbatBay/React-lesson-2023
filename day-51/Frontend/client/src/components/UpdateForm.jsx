import { useEffect, useState } from "react";

export default function UpdateForm({ setCurrentData, currentData, setData }) {
  const [formName, setFormName] = useState("");
  const [formMajor, setFormMajor] = useState("");
  const UPDATE_URL = "http://localhost:8080/data";
  async function sendPutRequest(data) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(UPDATE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }

  useEffect(() => {
    setFormName(currentData.name);
    setFormMajor(currentData.major);
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.major.value);
    console.log(e.target.name.value);
    const sendData = {
      id: currentData.id,
      name: currentData.name,
      major: currentData.major,
    };
    sendPutRequest(sendData);
  }
  function handleFormName(e) {
    console.log(e.target.value);
    setCurrentData({ ...currentData, name: e.target.value });
  }
  function handleFormMajor(e) {
    console.log(e.target.value);
    setCurrentData({ ...currentData, major: e.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name:
          <input
            type="text"
            name="name"
            placeholder="name"
            value={currentData.name}
            onChange={handleFormName}
          />
        </label>
        <br />
        <label htmlFor="">
          Major:
          <input
            type="text"
            name="major"
            placeholder="major"
            value={currentData.major}
            onChange={handleFormMajor}
          />
        </label>
        <br />
        <button>Update</button>
      </form>
    </div>
  );
}
