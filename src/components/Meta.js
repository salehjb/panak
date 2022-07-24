import Head from "next/head";

function Meta({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="saleh jalili" />
      <meta name="copyright" content="saleh jalili" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="4 days" />
      <meta name="language" content="fa" />
      <meta name="geo.region" content="IR" />
      <meta name="geo.placename" content="تهران، مشهد" />
    </Head>
  );
}

Meta.defaultProps = {
   title: "پاناک",
   description: "سایت آموزشی پاناک همراه شما در مسیر برنامه نویسی است، و در این مسیر شما رو همراهی میکنیم تا خودتون یک برنامه نویس سنیور بشید",
   keywords: "آموزش برنامه نویسی، پاناک، آموزش آنلاین، آموزش جاوااسکریپت، آموزش پایتون، آموزش فرانت اند، آموزش بک اند، برنامه نویسی",
}

export default Meta;