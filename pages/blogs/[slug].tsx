import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import BlogLayout from "src/components/layouts/BlogLayout";
import dp from "../../src/assets/blog/dp.jpg";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

interface Props {
  slug: string;
  data: {
    [key: string]: any;
  };
  content: string;
}

interface StaticProp extends ParsedUrlQuery {
  slug: string;
}

const slug: React.FC<Props> = ({ content, data }) => {
  return (
    <BlogLayout
      seo={{
        title: data.title,
        description: data.description,
        openGraph: {
          title: data.title,
          description: data.description,
          type: "website",
          article: {
            authors: ["Prince Carlo Juguilon"],
            publishedTime: data.date,
            tags: ["Trivia", "Get To Know", "Hobbies"],
          },
          images: [
            {
              url: data.cover_image,
              alt: data.cover_image,
            },
          ],
        },
      }}
    >
      <div className="flex flex-col w-full pt-16 lg:w-2/3">
        <p className="text-sm text-gray-400">{data.date} PST</p>

        <h1 className="mt-4 text-2xl font-bold md:text-3xl">{data.title}</h1>

        <div className="flex items-center justify-start mt-8 space-x-2">
          <img
            src={dp}
            alt="author"
            className="w-16 h-16 border border-gray-700 rounded-full"
          />

          <div>
            <h4 className="text-sm">Prince Carlo Juguilon</h4>
            <p className="text-xs text-gray-400">Software Developer</p>
          </div>
        </div>

        <div className="w-full h-px my-8 bg-gray-700" />

        <article
          dangerouslySetInnerHTML={{ __html: marked(content) }}
          className="mt-2 prose lg:prose-lg max-w-none prose-blue"
        />
      </div>

      <div className="flex flex-col w-full pt-16 lg:w-1/3">
        <div className="flex items-center justify-center">
          <p className="font-semibold uppercase">Read Next</p>
        </div>
      </div>
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths<StaticProp> = async () => {
  const files = fs.readdirSync(path.join("markdowns"));

  const paths = files.map((name) => ({
    params: { slug: name.replace(".md", "") } as StaticProp,
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { slug } = params as StaticProp;

  const meta = fs.readFileSync(path.join("markdowns", `${slug}.md`), "utf-8");
  const { data, content } = matter(meta);

  return {
    props: {
      slug,
      content,
      data,
    },
  };
};

export default slug;
