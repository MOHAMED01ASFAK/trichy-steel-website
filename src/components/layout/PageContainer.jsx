const PageContainer = ({ children, className = '' }) => (
  <main className={`page-shell ${className}`.trim()}>
    {children}
  </main>
);

export default PageContainer;
