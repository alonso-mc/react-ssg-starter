import css from './layout.module.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        itemScope
        itemType="http://schema.org/WebPage"
        className={css.layout}
      >
        {children}
      </body>
    </html>
  );
}
