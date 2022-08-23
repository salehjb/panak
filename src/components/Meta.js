import Head from "next/head";

const defaultMetas = {
  title: "پاناک",
  description:
    "سایت آموزشی پاناک همراه شما در مسیر برنامه نویسی است، و در این مسیر شما رو همراهی میکنیم تا خودتون یک برنامه نویس سنیور بشید",
  keywords:
    "آموزش برنامه نویسی، پاناک، آموزش آنلاین، آموزش جاوااسکریپت، آموزش پایتون، آموزش فرانت اند، آموزش بک اند، برنامه نویسی",
};

function Meta({ title, description, keywords, disableAnother }) {
  return (
    <Head>
      <title>{title}</title>
      {!disableAnother && (
        <>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, maximum-scale=1.0"
          />
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content={`${defaultMetas.keywords}، ${keywords}`}
          />
          <meta name="author" content="saleh jalili" />
          <meta name="copyright" content="saleh jalili" />
          <meta name="robots" content="index, follow" />
          <meta name="revisit-after" content="4 days" />
          <meta name="language" content="fa" />
          <meta name="geo.region" content="IR" />
          <meta name="geo.placename" content="تهران، مشهد" />
        </>
      )}
    </Head>
  );
}

Meta.defaultProps = {
  title: defaultMetas.title,
  description: defaultMetas.description,
  keywords: defaultMetas.keywords,
};

export default Meta;
