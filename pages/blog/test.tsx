import { GetStaticPropsResult } from "next";
import React from "react";
import BlogLayout from "src/components/layouts/BlogLayout";
import dp from "../../src/assets/blog/dp.jpg";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Props {
  slug: string;
  data: {
    [key: string]: any;
  };
  content: string;
}

const test: React.FC<Props> = ({ slug, data, content }) => {
  return (
    <BlogLayout seo={{ title: "A little more - Prince Carlo Juguilon" }}>
      <div className="flex flex-col w-full pt-16 lg:w-2/3">
        <p className="text-sm text-gray-400">May 3, 2021 4:24pm PST</p>

        <h1 className="mt-4 text-2xl font-bold md:text-3xl">{slug}</h1>

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

        <article className="flex flex-col min-h-screen mt-4 space-y-4 font-serif">
          {content}
        </article>
      </div>

      <div className="flex flex-col w-full pt-16 lg:w-1/3">
        <div className="flex items-center justify-center">
          <p className="font-semibold uppercase">Read Next</p>
        </div>
      </div>
    </BlogLayout>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const files = fs.readdirSync(path.join("markdowns"));

  const blogs = files.map((name) => {
    const slug = name.replace(".md", "");
    const meta = fs.readFileSync(path.join("markdowns", name), "utf-8");

    const { data, content } = matter(meta);

    return {
      slug,
      data,
      content,
    };
  });

  return {
    props: {
      ...blogs[0],
    },
  };
}

export default test;
