import Nav from '../components/nav';

export default function About() {
  return (
    <>
      <Nav />
      <div
        style={{
          maxWidth: '700px',
          margin: '40px auto',
          padding: '32px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            marginBottom: '16px',
            color: '#222',
            fontWeight: 700,
            letterSpacing: '-1px',
          }}
        >
          About
        </h1>
        <p
          style={{
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: '#444',
            marginBottom: '18px',
          }}
        >
          Hi, I'm the creator of this blog. Here, I share insights, tutorials,
          and stories about web development, programming, and technology trends.
        </p>
        <p
          style={{
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: '#444',
          }}
        >
          My goal is to help others learn and grow in their coding journey by
          providing practical examples, tips, and resources. Thanks for
          visiting!
        </p>
      </div>
    </>
  );
}
//   );
