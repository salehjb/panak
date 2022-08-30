// components
import Header from "components/home-page/Header";
import LatestCourses from "components/home-page/LatestCourses";
import PanakDescription from "components/home-page/PanakDescription";
import Layout from "components/layout/Layout";
import Meta from "components/Meta";

function index() {
  return (
    <>
      <Meta title="آکادمی آنلاین پاناک" />
      <Layout>
        <Header />
        <LatestCourses />
        <PanakDescription />
      </Layout>
    </>
  );
}

export default index;
