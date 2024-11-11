import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "./utils/fetchFromAPI";

function Feed() {
  const [selectedCategory, SetSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  // <!-- main api fetching starts from here  -->
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  // upto here

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",
          px: { sx: 2, md: 2 },
          height: { sx: "auto", md: "92vh" },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          SetSelectedCategory={SetSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 PK Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
