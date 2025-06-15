import styled from "styled-components";

export const HoverText = styled.li`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverText};
  }
`;
