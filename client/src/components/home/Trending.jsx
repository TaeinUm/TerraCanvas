import React, { useState, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";

function Trending() {
  /****   useState Section  ****/
  const [scrollAmount, setScrollAmount] = useState(0);

  /****   useEffect Section  ****/
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollAmount((prev) => (prev - 650) % (650 * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /****   return  ****/
  return (
    <div>
      <Box sx={{ overflow: "hidden", mb: 5 }}>
        {/* Title */}
        <Typography
          variant="h2"
          component="h3"
          sx={{
            fontSize: "50px",
            color: "#FAFAFA",
            mb: 2,
            ml: 5,
            display: "flex",
            flexGrow: "1",
            fontWeight: "bold",
          }}
        >
          Trending Map Graphics
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "3250px",
            gap: "10px",
            ml: 5,
            transition: "transform 0.5s",
            transform: `translateX(${scrollAmount}px)`,
          }}
        >
          {/* TOP5 Trending Map Graphics Examples */}
          <Paper
            elevation={4}
            sx={{ width: "500px", height: "400px", bgcolor: "grey" }}
          >
            img
          </Paper>
          <Paper
            elevation={4}
            sx={{ width: "500px", height: "400px", bgcolor: "grey" }}
          >
            img
          </Paper>
          <Paper
            elevation={4}
            sx={{ width: "500px", height: "400px", bgcolor: "grey" }}
          >
            img
          </Paper>
          <Paper
            elevation={4}
            sx={{ width: "500px", height: "400px", bgcolor: "grey" }}
          >
            img
          </Paper>
          <Paper
            elevation={4}
            sx={{ width: "500px", height: "400px", bgcolor: "grey" }}
          >
            img
          </Paper>
        </Box>
      </Box>
    </div>
  );
}

export default Trending;
