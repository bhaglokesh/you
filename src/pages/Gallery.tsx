import React from 'react';
import Section from '../components/Section';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => (
  <Section id="gallery" title="Gallery">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            <div className="overflow-hidden rounded-sm border border-gray-200 dark:border-gray-700 relative aspect-[4/3] group">
                <img 
                  src={item.imageUrl} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 italic font-medium">
              {item.caption}
            </div>
          </div>
        ))}
      </div>
  </Section>
);

export default Gallery;