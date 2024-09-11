import React, { ForwardedRef } from 'react';
import { NavLink as NavLinkBase, NavLinkProps as NavLinkBaseProps } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// Define a custom interface for props, including activeClassName
interface NavLinkProps extends Omit<NavLinkBaseProps, 'className'> {
  className?: string;
}

// ForwardRef type is applied to handle the ref and props correctly
export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ ...props }, ref: ForwardedRef<HTMLAnchorElement>) => {
    const { palette: { mode } } = useTheme();
    console.log('!!! mode:', mode);
    return <NavLinkBase
      ref={ref}
      {...props}
      className={({ isActive }) => {
        return isActive ? props.className + ` activeLink--${mode}` : props.className;
      }}
    />;
  },
);

// Set the displayName for better debugging
NavLink.displayName = 'NavLink';
