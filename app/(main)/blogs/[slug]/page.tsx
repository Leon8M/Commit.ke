
import { getPostData, getAllPostSlugs } from "@/lib/markdown";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import StaggeredFadeIn from "@/app/components/animations/StaggeredFadeIn";
import { Button } from "@/components/ui/button";

async function ArticleContent({ slug }: { slug: string }) {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
    const postData = await getPostData('blogs', slug);
    return (
        <StaggeredFadeIn>
            <div className="text-center mb-12">
                <p className="text-muted-foreground mb-2">{new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h1 className="text-5xl font-extrabold tracking-tighter">{postData.title}</h1>
            </div>
            <div className="relative w-full h-[500px] mb-12">
                <Image src={postData.image} alt={postData.title} layout="fill" objectFit="cover" className="rounded-xl"/>
            </div>
            <div
                className="prose prose-xl max-w-none mx-auto"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </StaggeredFadeIn>
    )
}

function ArticleSkeleton() {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="h-8 w-1/2 bg-secondary rounded animate-pulse mx-auto mb-2"></div>
            <div className="h-12 w-3/4 bg-secondary rounded animate-pulse mx-auto mb-12"></div>
            <div className="w-full h-[500px] bg-secondary rounded-lg animate-pulse mb-12"></div>
            <div className="space-y-4">
                <div className="h-4 w-full bg-secondary rounded animate-pulse"></div>
                <div className="h-4 w-full bg-secondary rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-secondary rounded animate-pulse"></div>
            </div>
        </div>
    )
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  return (
    <article className="max-w-5xl mx-auto">
       <Link href="/blogs" className="mb-8 inline-block">
        <Button variant="outline">
            <MoveLeft className="mr-2 h-4 w-4" />
            Back to Blogs
        </Button>
      </Link>
      <Suspense fallback={<ArticleSkeleton />}>
          <ArticleContent slug={params.slug} />
      </Suspense>
    </article>
  );
}

export async function generateStaticParams() {
    const paths = getAllPostSlugs('blogs');
    return paths;
}