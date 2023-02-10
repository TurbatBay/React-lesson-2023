import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 769,
      lg: 1140,
      xl: 1440,
    },
  },
});

const GridMUI = () => {
  return (
    <div>
      <h1>Day-59 -- MUI Grid Box - Custom theme</h1>
      <main>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: {
                    sx: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
              >
                First column
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: {
                    sx: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                Second column
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </main>
    </div>
  );
};

export default GridMUI;
