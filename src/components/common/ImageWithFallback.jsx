import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

const ImageWithFallback = ({
  src,
  alt,
  className = '',
  aspectRatio = '56.25%',
  priority = false,
  width,
  height,
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => setHasError(true);

  return (
    <div
      className={`image-fallback ${className}`.trim()}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(11,31,58,0.12), rgba(11,31,58,0.04))',
      }}
    >
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          width={width}
          height={height}
          onError={handleError}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            placeItems: 'center',
            background: 'radial-gradient(circle at center, rgba(11,31,58,0.18), rgba(11,31,58,0.04))',
            color: 'var(--navy)',
          }}
        >
          <ImageIcon size={28} aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
