import React, { useState } from 'react';
import { Calendar, ArrowRight, BookOpen, Feather, X } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  imageUrl: string;
  readTime: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Bring a Sketchbook with you...',
    date: '18 Jul 2026',
    category: 'Travel Tips & Gear',
    summary: 'Why traveling with a sketchbook transforms your perception of places, light, and memories in ways a camera lens never can.',
    content: `Traveling with a sketchbook opens up a different dimension of observation. When you sit down with a pencil or watercolor set in a bustling marketplace or along a quiet seaside cliff, time slows down. You notice the angle of sunlight filtering through arched alleyways, the texture of weathered stone, and the subtle shifts in cloud formations. 

    Whether you consider yourself an experienced painter or a curious novice, packing a compact sketchbook and a small pan set of watercolours is the single best decision you can make for your travels. You won't just record a scene — you will carry the memory of the breeze, the sound of waves, and the aroma of morning coffee in every brushstroke.`,
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read'
  },
  {
    id: 'post-2',
    title: 'Bonnie Scotland',
    date: '22 May 2026',
    category: 'Destination Focus',
    summary: 'Exploring the wild highlands, silver lochs, and tempestuous light of Scotland’s northwest wilderness.',
    content: `Scotland’s far northwest contains some of the last remaining true wildernesses in Europe. From the glass-like reflections on Loch Assynt to the imposing silhouette of Ardvreck Castle, every corner offers an painterly spectacle. 

    In May, the gorse blooms in vivid gold against the ancient granite peaks, and the ever-shifting atmospheric clouds create dramatic shadow plays across the heather. Our upcoming Scottish highland retreat focuses on loose wet-in-wet watercolor techniques designed to capture this ethereal light before it shifts again.`,
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  },
  {
    id: 'post-3',
    title: 'Last Minute... One room left',
    date: '15 Apr 2026',
    category: 'Trip Updates',
    summary: 'A rare last-minute opening for our autumn painting journey into the pale mountain spires of the Italian Dolomites.',
    content: `We have just had a last-minute cancellation for a single boutique room on our Oct 2026 Italian Dolomites Painting Retreat! 

    Nestled in the tranquil Val di Funes, this trip includes daily guided plein-air workshops with panoramic views of the iconic Odle mountain group, gourmet South Tyrolean dinners, and cozy alpine chalet accommodations. If you have been dreaming of capturing golden larch trees and pale dolomite cliffs in October sunlight, this is your sign to join us.`,
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800',
    readTime: '2 min read'
  },
  {
    id: 'post-4',
    title: 'Be a Fan fan',
    date: '20 Mar 2026',
    category: 'Technique & Tradition',
    summary: 'Mastering the delicate art of fan brushes and dry-brush foliage techniques for capturing distant trees and sea foam.',
    content: `The humble fan brush is often misunderstood. In inexperienced hands it can create repetitive, artificial marks, but when mastered with drier paint and variable hand pressure, it becomes a marvelously expressive tool for plein-air painters.

    In this post, we demonstrate how to feather the edges of pine forests, blend soft cloud gradients, and create believable coastal sea sprays using natural hair fan brushes during outdoor sketching sessions.`,
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
    readTime: '3 min read'
  }
];

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-[#faf8f5] border-t border-[#e8e4da] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
            <Feather className="w-3.5 h-3.5 text-[#70826b]" />
            <span className="font-handwriting text-base">Journal & Stories</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c]">
            From the Blog
          </h2>
          <p className="mt-3 text-base text-[#525d4f] font-sans-body">
            Musings on watercolor techniques, destination spotlights, studio stories, and travel sketching advice.
          </p>
        </div>

        {/* 4 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-white rounded-lg border-2 border-[#323d30] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer relative"
            >
              {/* Polaroid-style Top Tape */}
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
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-[#70826b] font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                    <span className="text-[#a0a89c]">•</span>
                    <span className="text-[#626e5e] font-normal">{post.readTime}</span>
                  </div>

                  <h3 className="font-serif-title text-xl font-bold text-[#1e251c] group-hover:text-[#70826b] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#4b5449] font-sans-body line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs text-[#70826b] font-bold border-t border-[#f2ede4] mt-auto">
                <span className="group-hover:underline">Read Article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Blog Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-xl border-2 border-[#323d30] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-xl">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f2ede4] hover:bg-[#e2ded4] text-[#1e251c] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b] mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.category}</span>
            </div>

            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c] mb-4">
              {selectedPost.title}
            </h2>

            <div className="aspect-16/9 rounded-lg overflow-hidden border border-[#323d30] mb-6">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#3d463b] leading-relaxed font-sans-body whitespace-pre-line">
              {selectedPost.content}
            </div>

            <div className="mt-8 pt-6 border-t border-[#e8e4da] flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 bg-[#70826b] text-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#5a6a56] transition-colors"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
