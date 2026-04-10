import React from "react";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DocsSidebar } from "@/components/DocsSidebar";
import { cn } from "@/lib/utils";

async function getReleases() {
  const filePath = path.join(process.cwd(), "releases.md");
  const markdown = fs.readFileSync(filePath, "utf-8");
  
  // Basic heading extraction for sidebar
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    let text = match[2].trim();
    // Remove links and bold markup from text for the sidebar
    text = text.replace(/\[(.+?)\]\(.+?\)/g, '$1').replace(/\*\*(.+?)\*\*/g, '$1');
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ level, text, id });
  }

  return { markdown, headings };
}

const MarkdownComponents = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        "scroll-m-20 text-3xl md:text-4xl font-semibold tracking-tight mb-6 mt-10 first:mt-0 text-gray-900",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        "scroll-m-20 border-b border-gray-200 pb-3 text-2xl font-semibold tracking-tight mt-14 mb-6 text-gray-900",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight mt-10 mb-3 text-gray-900",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: any) => (
    <h4
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight mt-7 mb-3 text-gray-900",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: any) => (
    <p
      className={cn("leading-7 mt-3 first:mt-0 text-gray-700 font-normal text-base mb-5", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn("my-5 ml-6 list-disc [&>li]:mt-1.5 text-gray-700", className)} {...props} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn("my-5 ml-6 list-decimal [&>li]:mt-1.5 text-gray-700", className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: any) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-gray-300 pl-4 text-gray-600 py-1",
        className
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }: any) => (
    <div className="my-7 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white overflow-hidden">
      <table className={cn("w-full text-left", className)} {...props} />
    </div>
  ),
  thead: ({ className, ...props }: any) => (
    <thead className={cn("bg-gray-50 border-b border-gray-200", className)} {...props} />
  ),
  tr: ({ className, ...props }: any) => (
    <tr
      className={cn("m-0 hover:bg-gray-50", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: any) => (
    <th
      className={cn(
        "px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn(
        "px-4 py-3 text-sm text-gray-700 border-t border-gray-100",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: any) => (
    <code
      className={cn(
        "relative rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-gray-800",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: any) => (
    <pre
      className={cn(
        "mb-5 mt-5 overflow-x-auto rounded-xl bg-gray-950 p-4",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }: any) => (
    <hr className="my-12 border-gray-200" {...props} />
  ),
  strong: ({ ...props }: any) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  a: ({ className, ...props }: any) => (
    <a
      className={cn("font-medium text-gray-900 underline underline-offset-2 decoration-gray-300 hover:decoration-gray-500", className)}
      {...props}
    />
  ),
};

export default async function ReleasesPage() {
  const { markdown, headings } = await getReleases();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 lg:px-6 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 relative items-start">
          
          {/* Documentation Sidebar - Reused for Releases */}
          <DocsSidebar headings={headings} />

          {/* Releases Content */}
          <div className="flex-1 min-w-0 max-w-3xl lg:ml-10">
            <article className="max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap' }]
                ]}
                components={MarkdownComponents}
              >
                {markdown}
              </ReactMarkdown>
            </article>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
