import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          gap: '1.5rem',
          background: '#222',
          padding: '1rem',
          borderRadius: '8px',
          justifyContent: 'center', // Center items horizontally
          alignItems: 'center', // Center items vertically
        }}
      >
        <Link
          href="/"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'color 0.2s',
          }}
        >
          Home
        </Link>
        <Link
          href="posts"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'color 0.2s',
          }}
        >
          Post
        </Link>
        <Link
          href="about"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'color 0.2s',
          }}
        >
          About
        </Link>
      </nav>
    </>
  );
}
