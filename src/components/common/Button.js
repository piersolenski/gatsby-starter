import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import styledMap from 'styled-map';
import { darken, lighten } from 'polished';

import lock from '../../utils/lock';

const Wrapper = styled.div`
  ${lock('font-size', '13px', '15px')};
  color: ${styledMap('color', {
    black: ({ theme }) => theme.colors.white,
    white: ({ theme }) => theme.colors.black,
  })};
  background: ${styledMap('color', {
    black: ({ theme }) => theme.colors.black,
    white: ({ theme }) => theme.colors.white,
  })};
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  line-height: 1.5em;
  display: inline-block;
  transition: color 0.2s ease;
  will-change: color;
  padding: 0.75em 1em;
  &:hover {
    color: ${styledMap('color', {
      black: ({ theme }) => darken(0.25, theme.colors.white),
      white: ({ theme }) => lighten(0.5, theme.colors.black),
    })};
  }
  &:active {
    transform: scale(0.975);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const getElement = (href, onClick, to, type) => {
  if (href) return 'a';
  if (onClick || type) return 'button';
  if (to) return Link;
  return 'div';
};

export default function Button({
  className,
  color,
  children,
  href,
  onClick,
  target,
  type,
  to,
}) {
  return (
    <Wrapper
      color={color}
      as={getElement(href, onClick, to, type)}
      className={className}
      href={href}
      onClick={onClick}
      target={target}
      to={to}
      type={type}
    >
      {children}
    </Wrapper>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['black', 'white']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
};
