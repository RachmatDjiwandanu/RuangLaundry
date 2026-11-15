import React from 'react';

/**
 * Reusable Badge component for section eyebrows, feature tags, and status chips.
 * Follows DESIGN.md Section 10.3 and visual hierarchy guidelines.
 */
export default function Badge({
  children,
  variant = 'blue',
  size = 'md',
  icon: Icon,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center font-semibold rounded-full tracking-wide uppercase transition-colors';

  const variantStyles = {
    blue: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
    navy: 'bg-navy-primary/10 text-navy-primary border border-navy-primary/15',
    white: 'bg-surface/15 text-surface border border-surface/30 backdrop-blur-sm',
    emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    amber: 'bg-amber-50 text-amber-700 border border-amber-200',
    muted: 'bg-surface-muted text-content-secondary border border-border',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3.5 py-1 gap-1.5',
    lg: 'text-sm px-4 py-1.5 gap-2',
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.blue} ${sizeStyles[size] || sizeStyles.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}

