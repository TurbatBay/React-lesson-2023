import React from "react";
import Container from "@mui/material/Container";
import { Card, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TimerActionButton from "./TimerActionButton";
import Box from "@mui/material/Box";
import Edit from "@mui/icons-material/Edit";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";
export default function Timer({ title, project, elapsed, runningSince }) {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const timer = renderElapsedString(elapsed, runningSince);
  console.log(timer);
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345 }}>
        <Typography sx={{ fontSize: 28 }} color="text.secondary">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{timer}</h1>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <DeleteIcon />
          <EditIcon />
        </Box>
        <TimerActionButton
          isTimerRunning={timerIsRunning}
          onStartClick={() => {
            setTimerIsRunning(true);
          }}
          onStopClick={() => {
            setTimerIsRunning(false);
          }}
        />
      </Card>
    </Container>
  );
}
