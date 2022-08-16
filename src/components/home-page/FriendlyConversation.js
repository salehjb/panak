import { Box, Container, Grid } from "@mui/material";
import { Player } from "video-react";
// components
import HomeTitle from "./HomeTitle";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";

function FriendlyConversation() {
  return (
    <Container maxWidth="xl">
      <Grid container mt={5}>
        <Grid item xs={12}>
          <HomeTitle text="گپی دوستانه" />
        </Grid>
        <Grid item mt={5} xs={12} sx={{ ...flexCenter }}>
          <Box sx={{ width: "800px" }}>
            <Player
              playsInline
              fluid
              src="bache-mamani.mp4"
              poster="/images/mehdi.jpg"
              width="100%"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FriendlyConversation;
