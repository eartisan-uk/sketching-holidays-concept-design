import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Tag, Share2, Feather, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.id === id || p.slug === id) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <article className="py-12 sm:py-16 bg-[#faf8f5]">
      
      {/* Top Breadcrumb & Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#70826b] hover:text-[#4d5c49] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all stories</span>
          </Link>
          <span className="text-xs text-[#8e988a]">
            {post.category}
          </span>
        </div>
      </div>

      {/* Main Story Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-md p-6 sm:p-12 relative overflow-hidden">
          <div className="tape-strip absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 rotate-[-1deg] z-20 pointer-events-none" />

          {/* Article Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
              <span>{post.category}</span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c] leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#70826b] font-semibold">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>By {post.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="aspect-16/9 rounded-lg overflow-hidden border-2 border-[#323d30] mb-8 bg-[#f4f1e9]">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Summary Lead */}
          <p className="font-serif-title text-lg sm:text-xl italic text-[#3d463b] bg-[#f8f5ee] p-5 rounded-lg border-l-4 border-[#70826b] mb-8 leading-relaxed">
            "{post.summary}"
          </p>

          {/* Body Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-[#2e372c] font-sans-body leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-[#e8e4da] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#70826b] mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-[#f4f1e9] text-xs text-[#4b5449] font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="mt-10 p-6 bg-[#faf8f5] rounded-xl border border-[#323d30] flex flex-col sm:flex-row items-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
              alt="Mary King"
              className="w-20 h-20 rounded-full object-cover border-2 border-[#70826b] shrink-0"
            />
            <div>
              <h4 className="font-serif-title font-bold text-lg text-[#1e251c]">Written by Mary King</h4>
              <p className="text-xs sm:text-sm text-[#4b5449] mt-1 leading-relaxed">
                Mary is a professional landscape artist, painting tutor, and founder of Vistas Sketching Holidays. She guides painters of all skill levels on immersive plein-air adventures across Europe and beyond.
              </p>
              <Link
                to="/your-host"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#70826b] hover:underline"
              >
                <span>Read Mary’s full biography</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Related Stories */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h3 className="font-serif-title text-2xl font-bold text-[#1e251c] mb-6">
          More From The Journal
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((rel) => (
            <Link
              key={rel.id}
              to={`/blog/${rel.id}`}
              className="group bg-white rounded-lg border border-[#323d30] overflow-hidden p-4 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="aspect-16/10 rounded overflow-hidden mb-3 bg-[#e8e4da]">
                <img
                  src={rel.imageUrl}
                  alt={rel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-[11px] text-[#70826b] font-semibold">{rel.date}</p>
              <h4 className="font-serif-title font-bold text-base text-[#1e251c] group-hover:text-[#70826b] transition-colors mt-1">
                {rel.title}
              </h4>
            </Link>
          ))}
        </div>
      </section>

    </article>
  );
};
