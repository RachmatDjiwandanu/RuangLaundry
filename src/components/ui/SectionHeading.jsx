import React from 'react';
import Badge from './Badge.jsx';

/**
 * SectionHeading component for standardized section headers.
 * Follows DESIGN.md Section 4.2, 10.3 and visual hierarchy guidelines.
 */
export default function SectionHeading({
  badge,
  badgeIcon,
  badgeVariant,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  const containerAlign = isCenter ? 'text-center mx-auto items-center' : 'text-left items-start';
  const maxWidthClass = isCenter ? 'max-w-2xl' : 'max-w-3xl';

  const defaultBadgeVariant = isDark ? 'white' : 'blue';

  const titleColor = isDark ? 'text-white' : 'text-navy-primary';
  const subtitleColor = isDark ? 'text-surface-muted/90' : 'text-content-secondary';

  return (
    <div className={`flex flex-col ${containerAlign} ${maxWidthClass} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <div className="mb-3 sm:mb-4">
          <Badge
            variant={badgeVariant || defaultBadgeVariant}
            icon={badgeIcon}
          >
            {badge}
          </Badge>
        </div>
      )}

      {title && (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${titleColor} ${titleClassName}`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed ${subtitleColor} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

