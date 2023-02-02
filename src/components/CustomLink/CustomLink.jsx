import * as React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          textDecoration: match ? 'underline' : 'none',
          color: match ? '#f0d90d' : 'white',
          backgroundColor: '#3f51b5',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '18px',
          fontWeight: 700,
          display: 'inline-block',
          marginBottom: '15px',
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
