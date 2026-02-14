'use client';

/**
 * Client component that scrolls to a target section on every click.
 * Unlike native anchor links, this always scrolls even if the hash is already in the URL.
 */
export default function ScrollToSection({
  targetId,
  children,
  className,
  style,
}: {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
