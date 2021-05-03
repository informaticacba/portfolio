import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <h1 className="text-3xl font-bold tracking-tight text-gray-300 lg:text-6xl">
        Let's Work Together.
      </h1>

      <div>
        <h2 className="text-gray-400">under development</h2>
      </div>
    </div>
  );
};

export default Contact;
