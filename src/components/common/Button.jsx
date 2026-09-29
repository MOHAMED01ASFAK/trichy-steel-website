const Button = ({ children, variant = 'primary', className = '', as = 'button', ...props }) => {
  const Component = as;
  const variantClass =
    variant === 'secondary'
      ? 'btn btn-secondary'
      : variant === 'ghost'
        ? 'btn btn-ghost'
        : 'btn btn-primary';

  return (
    <Component className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default Button;
