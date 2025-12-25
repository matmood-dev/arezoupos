import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div<{ $inline?: boolean; $size?: number }>`
  display: ${p => p.$inline ? 'inline-flex' : 'flex'};
  align-items: center;
  justify-content: center;
  width: ${p => p.$size ? `${p.$size}px` : (p.$inline ? '20px' : '80px')};
  height: ${p => p.$size ? `${p.$size}px` : (p.$inline ? '20px' : '80px')};
`;

export interface LoaderProps {
  size?: number;
  inline?: boolean;
  ariaLabel?: string;
  src?: string;
}

const DEFAULT_SRC = 'https://lottie.host/35ffcf09-c627-4125-b7cf-7402c168d506/ivmaTqWwW0.lottie';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Fallback = styled.div<{ $size?: number }>`
  width: ${p => p.$size ? `${p.$size}px` : '40px'};
  height: ${p => p.$size ? `${p.$size}px` : '40px'};
  border-radius: 50%;
  border: 3px solid rgba(0,0,0,0.08);
  border-top-color: ${p => p.theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`;

const Loader: React.FC<LoaderProps> = ({ size, inline, ariaLabel = 'Loading', src = DEFAULT_SRC }) => {
  const [Player, setPlayer] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    let mounted = true;
    // try to dynamically import the DotLottie player if available
    const modName = '@lottiefiles/dotlottie-react';
    // use a non-literal dynamic import and tell vite to ignore static pre-bundling
    // this avoids errors during dev when the package is not installed
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import(/* @vite-ignore */ modName)
      .then(mod => {
        if (!mounted) return;
        // module may export DotLottieReact or default
        const Comp = (mod && (mod.DotLottieReact || mod.default)) as React.ComponentType<any> | undefined;
        if (Comp) setPlayer(() => Comp);
      })
      .catch(() => {
        // ignore — fallback spinner will show
      });

    return () => { mounted = false; };
  }, []);

  return (
    <Wrapper $inline={inline} $size={size} role="status" aria-label={ariaLabel}>
      {Player ? (
        <Player src={src} autoplay loop style={{ width: '100%', height: '100%' }} />
      ) : (
        <Fallback $size={size} aria-hidden="true" />
      )}
    </Wrapper>
  );
};

export default Loader;
