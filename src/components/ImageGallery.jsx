import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';

// Placeholder card when no screenshot src is provided
const PlaceholderCard = ({ caption, index }) => {
  const gradients = [
    'from-cyan-900/60 to-slate-800',
    'from-violet-900/60 to-slate-800',
    'from-emerald-900/60 to-slate-800',
    'from-indigo-900/60 to-slate-800',
    'from-rose-900/60 to-slate-800',
    'from-amber-900/60 to-slate-800',
    'from-teal-900/60 to-slate-800',
    'from-fuchsia-900/60 to-slate-800',
  ];
  const grad = gradients[index % gradients.length];

  return (
    <div className={`screenshot-placeholder bg-gradient-to-br ${grad}`}>
      <Camera size={32} className="screenshot-placeholder-icon" />
      <span className="screenshot-placeholder-text">{caption}</span>
      <span className="screenshot-placeholder-label">Screenshot Coming Soon</span>
    </div>
  );
};

const ImageGallery = ({ screenshots }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    // Only re-enable scroll if the parent modal also manages it;
    // since modal already locks, we don't unlock here
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') closeLightbox();
    },
    [lightboxIndex, goNext, goPrev, closeLightbox]
  );

  // Attach keyboard listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!screenshots || screenshots.length === 0) return null;

  const current = lightboxIndex !== null ? screenshots[lightboxIndex] : null;

  return (
    <>
      {/* Grid */}
      <div className="gallery-grid">
        {screenshots.map((shot, i) => (
          <div
            key={i}
            className="gallery-thumb"
            onClick={() => openLightbox(i)}
            title={shot.caption}
          >
            {shot.src ? (
              <img
                src={shot.src}
                alt={shot.caption}
                className="gallery-thumb-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <PlaceholderCard caption={shot.caption} index={i} />
            <div className="gallery-thumb-caption">{shot.caption}</div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Close */}
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={24} />
          </button>

          {/* Prev */}
          {screenshots.length > 1 && (
            <button className="lightbox-nav lightbox-prev" onClick={goPrev}>
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Image */}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {current.src ? (
              <img
                src={current.src}
                alt={current.caption}
                className="lightbox-img"
              />
            ) : (
              <div className="lightbox-placeholder">
                <PlaceholderCard caption={current.caption} index={lightboxIndex} />
              </div>
            )}
            <p className="lightbox-caption">{current.caption}</p>
          </div>

          {/* Next */}
          {screenshots.length > 1 && (
            <button className="lightbox-nav lightbox-next" onClick={goNext}>
              <ChevronRight size={28} />
            </button>
          )}

          {/* Dots */}
          {screenshots.length > 1 && (
            <div className="lightbox-dots">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  className={`lightbox-dot ${i === lightboxIndex ? 'lightbox-dot-active' : ''}`}
                  onClick={() => setLightboxIndex(i)}
                />
              ))}
            </div>
          )}

          {/* Counter */}
          <div className="lightbox-counter">
            {lightboxIndex + 1} / {screenshots.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
