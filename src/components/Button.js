import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styled from 'styled-components';
import { darken } from 'polished';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.purple};
  appearance: none;
  border-radius: 36px;
  text-align: center;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  line-height: 24px;
  position: relative;
  text-decoration: none;
  display: inline-block;
  transition: background 0.2s ease, transform 0.1s ease;
  &:hover {
    background: ${({ theme }) => darken(0.1, theme.colors.purple)};
  }
  &:active {
    transform: scale(0.975);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  font-size: 14px;
  padding: 12px 24px;
`;

const getElement = (href, onClick, to) => {
  if (href) return 'a';
  if (onClick) return 'button';
  if (to) return Link;
  return 'div';
};

const Button = ({ className, children, href, onClick, target, type, to }) => (
  <Wrapper
    as={getElement(href, onClick, to)}
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
