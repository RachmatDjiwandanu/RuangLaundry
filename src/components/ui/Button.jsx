import React from 'react';

/**
 * Button component implementing the official design tokens and touch target guidelines.
 * Follows DESIGN.md Section 7.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  fullWidth = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-btn transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none min-h-[44px]';

  const variantStyles = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue-hover active:bg-[#1a71a1] shadow-sm focus-visible:ring-brand-blue',
    secondary: 'bg-surface text-navy-primary border border-border-subtle hover:bg-brand-light active:bg-[#e2edf8] hover:border-brand-blue/40 shadow-sm focus-visible:ring-navy-primary',
    navy: 'bg-navy-primary text-white hover:bg-navy-deep active:bg-black shadow-sm focus-visible:ring-navy-primary',
    ghost: 'bg-transparent text-navy-primary hover:bg-surface-muted active:bg-surface-muted/80 focus-visible:ring-navy-primary',
    white: 'bg-surface text-brand-blue hover:bg-brand-light shadow-sm focus-visible:ring-surface',
  };

  const sizeStyles = {
    sm: 'text-xs py-2 px-3.5 gap-1.5 min-h-[38px] sm:min-h-[40px]',
    md: 'text-sm py-3 px-[22px] gap-2 min-h-[44px]',
    lg: 'text-base py-3.5 px-7 gap-2.5 min-h-[48px]',
  };

  const disabledStyles = disabled
    ? 'opacity-60 cursor-not-allowed pointer-events-none'
    : 'cursor-pointer';

  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedClasses = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${disabledStyles} ${widthStyles} ${className}`.trim();

  // If href is provided, render as an anchor link
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:');
    const computedRel = rel || (isExternal ? 'noopener noreferrer' : undefined);

    return (
      <a
        href={href}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={computedRel}
        className={combinedClasses}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        {LeftIcon && <LeftIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
        <span>{children}</span>
        {RightIcon && <RightIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {LeftIcon && <LeftIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {RightIcon && <RightIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </button>
  );
}

