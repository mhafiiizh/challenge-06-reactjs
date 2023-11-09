/* eslint-disable operator-linebreak */
/* eslint-disable new-cap */
/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

'use client';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
