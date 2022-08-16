// components
import { Box } from "@mui/material";
import FriendlyConversation from "components/home-page/FriendlyConversation";
import Header from "components/home-page/Header";
import LatestArticles from "components/home-page/LatestArticles";
import LatestCourses from "components/home-page/LatestCourses";
import PanakDescription from "components/home-page/PanakDescription";
import Footer from "components/layout/Footer";
import Navbar from "components/layout/Navbar";

function index() {
  return (
    <>
      <Navbar />
      <Box>
        <Header />
        <LatestCourses />
        <LatestArticles />
      </Box>
      <Footer />
    </>
  );
}

export default index;
