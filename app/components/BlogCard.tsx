
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Blog = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
};

export default function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
    >
      <Link href={`/blogs/${blog.slug}`}>
        <div className="group relative overflow-hidden rounded-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            width={600}
            height={400}
            className="object-cover w-full h-80 transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <motion.h2
              className="text-2xl font-bold transform-gpu transition-transform duration-500 group-hover:-translate-y-2"
            >
              {blog.title}
            </motion.h2>
            <motion.p
              className="mt-2 text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              {blog.description}
            </motion.p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}