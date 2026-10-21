import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'gold' | 'outline' | 'outline-white' | 'whatsapp'
  size = 'md', // 'sm' | 'md' | 'lg'
  fullWidth = false,
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  target,
  rel,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = `btn btn-${variant} ${size !== 'md' ? `btn-${size}` : ''} ${fullWidth ? 'btn-full' : ''} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
