import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => (
  <Section id="blog" title="Writing & Thoughts">
    <ul className="space-y-8 my-4">
      {BLOG_POSTS.map((post) => (
        <li key={post.id} className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h3 className="font-serif font-semibold text-xl text-wiki-blue dark:text-wiki-linkdark tracking-tight">
                <Link to={`/blog/${post.id}`} className="hover:underline text-left">
                  {post.title}
                </Link>
              </h3>
              <div className="flex items-center gap-2 mt-1 sm:mt-0">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{post.date}</span>
                {post.lastUpdated && (
                  <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    Upd: {post.lastUpdated}
                  </span>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2 line-clamp-2 font-light">
              {post.excerpt}
            </p>
            <Link 
              to={`/blog/${post.id}`}
              className="text-xs font-semibold text-wiki-blue dark:text-wiki-linkdark hover:underline self-start flex items-center gap-0.5"
            >
              Read more <ChevronRight size={10} />
            </Link>
        </li>
      ))}
    </ul>
  </Section>
);

export default Blog;