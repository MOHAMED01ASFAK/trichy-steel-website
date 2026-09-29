const SectionHeading = ({ eyebrow, title, align = 'left', className = '' }) => {
  return (
    <div className={`section-heading ${align === 'center' ? 'center' : ''} ${className}`.trim()} style={{ position: 'relative' }}>
      {eyebrow ? <div className="section-index">{eyebrow}</div> : null}
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeading;
