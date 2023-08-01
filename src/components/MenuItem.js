import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  opacity: ${props => (props.selected ? '1' : '.6')};
  color: ${props => {
    if (props.mobile) {
      if (props.selected) {
        return 'var(--text-color)';
      }
      return 'rgba(255, 255, 255, .7)';
    } else {
      if (props.selected) {
        return 'var(--color-primary-dark)';
      }
      return 'var(--color-primary-light)';
    }
  }};
  border-color: ${props =>
    props.selected
      ? 'var(--color-primary-dark)'
      : 'var(--color-primary-light)'};
  border: ${props => (props.selected ? '1px solid' : '1px solid transparent')};
  border-radius: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  &:hover {
    border: 1px solid;
  }
`;

function renderIcon(title) {
  switch (title) {
    case 'popular':
      return 'heart';
    case 'top_rated':
      return 'poll';
    case 'upcoming':
      return 'calendar';
    default:
      return 'dot-circle';
  }
}

const MenuItem = ({ title, selected, mobile, titleEnglishName }) => {
  return (
    <StyledItem selected={selected} mobile={mobile}>
      <FontAwesomeIcon
        icon={renderIcon(titleEnglishName)}
        size="1x"
        style={{ margin: '0 10px' }}
      />
      {title}
    </StyledItem>
  );
};

export default MenuItem;
