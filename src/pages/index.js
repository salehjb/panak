import { GET_COURSES } from "graphql/queries";
import { useQuery } from "@apollo/client";
// components
import Header from "components/home-page/Header";
import LatestCourses from "components/home-page/LatestCourses";
import PanakDescription from "components/home-page/PanakDescription";
import Layout from "components/layout/Layout";
import Meta from "components/Meta";
import Loading from "shared/Loading";

function index() {
  const { loading, data, errors } = useQuery(GET_COURSES);

  const GRAPHCMS_URI = process.env.NEXT_PUBLIC_GRAPHCMS_URI

  console.log(GRAPHCMS_URI);

  return (
    <>
      <Meta title="آکادمی آنلاین پاناک" />
      {!loading ? (
        <Layout>
          <Header />
          <LatestCourses courses={data.courses.slice(0, 4)} />
          <PanakDescription />
        </Layout>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default index;
