
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";



type News = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export default function NewsCard({ news, index }: { news: News; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/news/${news.slug}`}>
        <Card className="h-full border-2 border-transparent hover:border-primary transition-all duration-300 group">
          <CardHeader>
            <div className="overflow-hidden rounded-lg">
                <Image
                    src={news.image}
                    alt={news.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-2 text-xl leading-tight group-hover:text-primary transition-colors">
              {news.title}
            </CardTitle>
            <CardDescription>{news.description}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}