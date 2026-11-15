import React from 'react';

/**
 * Standardized icon container with brand styling.
 * Follows DESIGN.md Section 8.
 */
export default function IconWrapper({
  icon: Icon,
  variant = 'blue',
  size = 'md',
  className = '',
  ...props
}) {
  const variantStyles = {
    blue: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
    accent: 'bg-brand-accent/15 text-brand-blue border border-brand-accent/25',
    navy: 'bg-navy-primary/10 text-navy-primary border border-navy-primary/15',
    white: 'bg-surface text-brand-blue shadow-card border border-border-subtle',
    emerald: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
  };

  const containerSizes = {
    sm: 'w-9 h-9 rounded-lg',
    md: 'w-12 h-12 rounded-xl',
    lg: 'w-14 h-14 rounded-2xl',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  };

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 transition-transform duration-200 ${containerSizes[size] || containerSizes.md} ${variantStyles[variant] || variantStyles.blue} ${className}`}
      {...props}
    >
      {Icon && <Icon className={iconSizes[size] || iconSizes.md} aria-hidden="true" />}
    </div>
  );
}

