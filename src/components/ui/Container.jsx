import React from 'react';

/**
 * Container component enforcing the 1200px max content width and consistent horizontal padding.
 * Follows DESIGN.md Section 5.2.
 */
export default function Container({
  as: Component = 'div',
  size = 'default',
  className = '',
  children,
  ...props
}) {
  const sizeClasses = {
    default: 'max-w-content',
    narrow: 'max-w-4xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size] || sizeClasses.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

