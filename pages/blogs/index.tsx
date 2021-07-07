import { GetStaticPropsResult } from "next";
import React from "react";
import BlogCard from "src/components/blogs/BlogCard";
import Layout from "src/components/layouts/Layout";
import aLittleMoreThumbnail from "../../src/assets/blog/a-little-more/thumbnail.jpg";
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

          <BlogCard
            image={aLittleMoreThumbnail}
            date="May 3, 2021"
            link="a-little-more"
            title="A little bit more of who I am. My hobbies, education, sports, etc."
            description="This blogs talks in depth more about my life, where I grew up, studied, the hobbies I do, the sports I play etc. Basically talking about not tech and coding stuff. Getting to know me in a personal level"
            tags={[
              { tag: "trivia" },
              { tag: "get to know", classes: "bg-blue-500" },
              { tag: "hobbies", classes: "bg-green-200" },
            ]}
          />

          <BlogCard
            image={aLittleMoreThumbnail}
            date="May 3, 2021"
            link="test"
            title="Test"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, voluptatem magnam? Quas illum architecto, dolor laborum deserunt similique sequi consectetur odit eveniet repellendus cumque, pariatur nemo, beatae velit nam totam."
            tags={[
              { tag: "trivia" },
              { tag: "get to know", classes: "bg-blue-500" },
              { tag: "hobbies", classes: "bg-green-200" },
            ]}
          />
        </div>
        <div className="h-24 md:h-32" />
      </div>
    </Layout>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const files = fs.readdirSync(path.join("markdowns"));

  const blogs = files.map((name) => {
    const slug = name.replace(".md", "");
    const meta = fs.readFileSync(path.join("markdowns", name), "utf-8");

    const { data, content, language, excerpt } = matter(meta);

    console.log({ data, language, excerpt });

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
}

export default blogs;
