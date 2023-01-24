import { Button, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function TimerForm({ title, project, elapsed }) {
  const [formData, setFormData] = useState();
  console.log(formData);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <h1>Timer Form</h1>
      <Grid sx={{ maxWidth: 345, margin: "0 auto" }}>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  type={"text"}
                  placeholder={title}
                  label={title}
                  variant={"outlined"}
                  fullWidth={true}
                  name={title}
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type={"text"}
                  placeholder={project}
                  label={project}
                  variant={"outlined"}
                  fullWidth={true}
                  name={project}
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button color={"success"} variant={"outlined"}>
                  Create
                </Button>
                <Button color={"success"} variant={"outlined"}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Grid>
    </div>
  );
}
