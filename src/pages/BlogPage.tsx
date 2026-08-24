import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Feather, Calendar, ArrowRight, Search, Tag, Clock, User, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Travel Tips & Gear', 'Destination Focus', 'Trip Updates', 'Technique & Tradition'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="py-12 sm:py-16 bg-[#faf8f5]">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b]">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-[#2c322b]">Journal & Blog</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
          <Feather className="w-3.5 h-3.5 text-[#70826b]" />
          <span className="font-handwriting text-base">Studio Notes & Travel Musings</span>
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl font-bold text-[#1e251c]">
          From The Blog
        </h1>
        <p className="mt-3 text-base text-[#525d4f] font-sans-body max-w-2xl mx-auto">
          Insights on watercolor techniques, travel sketching advice, behind-the-scenes stories, and destination spotlights from Mary King.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border-2 border-[#323d30] shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#70826b] text-white shadow-xs'
                    : 'bg-[#f4f1e9] text-[#3d463b] hover:bg-[#e4ded4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#70826b] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & tags..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b]"
            />
          </div>

        </div>
      </div>

      {/* Featured Lead Post (Only when on 'All' and no search) */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-md overflow-hidden relative group">
            <div className="tape-strip absolute -top-3 left-16 w-32 h-6 rotate-[-1.5deg] z-20 pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 aspect-16/10 lg:aspect-auto overflow-hidden bg-[#e8e4da]">
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b] mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#eef2ec] border border-[#c4cebf]">
                      Featured Story
                    </span>
                    <span>•</span>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredPost.date}</span>
                  </div>

                  <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c] group-hover:text-[#70826b] transition-colors leading-snug">
                    <Link to={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="mt-3 text-sm text-[#4b5449] leading-relaxed">
                    {featuredPost.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f2ede4] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#6e786b]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#70826b] hover:underline"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#323d30]">
            <p className="text-base text-[#525d4f]">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#70826b] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-lg border-2 border-[#323d30] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                <div className="tape-strip absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-4 rotate-[1deg] z-10 pointer-events-none" />

                <div>
                  {/* Image Container */}
                  <div className="relative aspect-16/10 overflow-hidden bg-[#f4f1e9] border-b-2 border-[#323d30]">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 z-10 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#faf8f5]/95 text-[#2c322b] border border-[#323d30]">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-[#70826b] font-semibold mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                      <span className="text-[#a0a89c]">•</span>
                      <span className="text-[#626e5e] font-normal">{post.readTime}</span>
                    </div>

                    <h3 className="font-serif-title text-xl font-bold text-[#1e251c] group-hover:text-[#70826b] transition-colors leading-snug">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#4b5449] font-sans-body line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>

                    {/* Tag chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-[#f4f1e9] text-[10px] text-[#556051] font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Read More Footer */}
                <div className="px-6 pb-5 pt-3 flex items-center justify-between text-xs text-[#70826b] font-bold border-t border-[#f2ede4] mt-auto">
                  <Link to={`/blog/${post.id}`} className="group-hover:underline flex items-center gap-1.5">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[#8e988a] font-normal">By {post.author}</span>
                </div>
              </article>
            ))}
          </div>
        )}

      </section>

    </div>
  );
};
