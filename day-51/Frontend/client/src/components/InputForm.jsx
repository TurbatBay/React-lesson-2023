import { useState } from "react";

export default function InputForm(setIsLoading, isLoading, setData) {
  const POST_DATA_URL = "http://localhost:8080/data";
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");

  async function postData(data) {
    console.log(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(POST_DATA_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
    console.log(FETCHED_DATA);
    if (FETCHED_DATA) {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      major: e.target.major.value,
    };
    // setIsLoading(true);
    postData(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="name">
          Name:
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </label>
        <br />
        <label htmlFor="major">
          Major:
          <input
            placeholder="Major"
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            name="major"
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
