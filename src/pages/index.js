// components
import Header from "components/home-page/Header";
import LatestArticles from "components/home-page/LatestArticles";
import LatestCourses from "components/home-page/LatestCourses";
import Layout from "components/layout/Layout";
import Meta from "components/Meta";

function index() {
  return (
    <>
      <Meta title="آکادمی آنلاین پاناک" />
      <Layout>
        <Header />
        <LatestCourses />
        <LatestArticles />
      </Layout>
    </>
  );
}

export default index;
