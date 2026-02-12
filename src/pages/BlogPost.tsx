import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, RefreshCw } from 'lucide-react';
import { PROFILE, BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <div className="p-8 text-center text-gray-600 dark:text-gray-400">Post not found</div>;
  }

  return (
    <div className="animate-fade-in pb-12">
      <div className="mb-6">
        <Link to="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back to list
        </Link>
      </div>

      <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs font-sans font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-sans text-gray-500 dark:text-gray-400">
             <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
             <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">•</span>
             <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </div>
        </header>

        <div className="prose dark:prose-invert prose-lg prose-gray max-w-none text-gray-800 dark:text-gray-300 leading-8 font-serif">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="mb-6 first:first-letter:text-5xl first:first-letter:font-medium first:first-letter:mr-3 first:first-letter:float-left first:first-letter:text-black dark:first:first-letter:text-white first:first-letter:leading-none font-light">
              {paragraph}
            </p>
          ))}
        </div>

        {post.lastUpdated && (
          <div className="mt-12 p-4 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-100 dark:border-gray-700/50">
             <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-sans italic">
                <RefreshCw size={14} className="text-gray-400 dark:text-gray-500" />
                This article was last updated on <span className="font-semibold text-gray-800 dark:text-gray-200 not-italic">{post.lastUpdated}</span>.
             </p>
          </div>
        )}

        <hr className="my-12 border-gray-100 dark:border-gray-800" />

        <div className="flex items-center justify-between font-sans">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
               <img src={PROFILE.image} alt={PROFILE.name} className="w-full h-full object-cover grayscale" />
             </div>
             <div>
               <div className="font-semibold text-sm text-gray-900 dark:text-white">{PROFILE.name}</div>
               <div className="text-xs text-gray-500 dark:text-gray-400 font-light">{PROFILE.role}</div>
             </div>
           </div>
        </div>
    </div>
  );
};

export default BlogPost;