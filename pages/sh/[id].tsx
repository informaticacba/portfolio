import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { NextSeo } from "next-seo";

interface Props extends ParsedUrlQuery {
  id: string;
  description: string;
  title: string;
}

const id: React.FC<Props> = ({ description, id, title }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={`${id} - ${description}`}
        openGraph={{
          type: "website",
          url: "https://princecaarlo.tech/",
          title,
          description: `${id} - ${description}`,
          images: [
            {
              url: "https://github.com/princejoogie.png",
              alt: "dp",
              height: 600,
              width: 600,
            },
          ],
        }}
      />
      <div>
        <h1>{title}</h1>
        <p>
          {id} - {description}
        </p>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id || "nullId";

  return {
    props: {
      description: "A sofftware engineer",
      id: id,
      title: "Prince Juguilon",
    },
  };
};

export default id;
