import { GetStaticProps } from "next";
import React from "react";
import BlogCard from "src/components/blogs/BlogCard";
import Layout from "src/components/layouts/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Item {
  slug: string;
  data: {
    [key: string]: any;
  };
  content: string;
}

interface Props {
  blogs: Item[];
}

const blogs: React.FC<Props> = ({ blogs }) => {
  return (
    <Layout
      seo={{
        title: "Blog - Prince Carlo",
        description:
          "In-depth explanation of the technologies I use in my projects.",
      }}
    >
      <div className="flex flex-col w-full">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-300 lg:text-6xl">
          Blogs.
        </h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog) => (
            <BlogCard
              image={blog.data.cover_image}
              date={blog.data.date}
              title={blog.data.title}
              description={blog.data.description}
              link={blog.slug}
              tags={blog.data.tags.map((e: string) => ({ tag: e }))}
            />
          ))}
        </div>
        <div className="h-24 md:h-32" />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
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
      blogs,
    },
  };
};

export default blogs;
