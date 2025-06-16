import { theme } from "@/style/theme";
import styled from "styled-components";

export const HoverText = styled.li`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverText};
  }

  &::after {
    content: "";
    position: absolute;
    opacity: 0;
    width: 20px;
    height: 2px;
    border-radius: 5px;
    bottom: -4px;
    left: 0px;
    background-color: ${({ theme }) => theme.colors.hoverText};
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;



export const ButtonNav = styled.button`
    background-color: transparent; 
    border: none;  
    cursor: pointer;
    color: ${({ theme }) => theme.colors.hoverText};
    `

export const SearchContainer = styled.div<{ expanded: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.4s ease;

  button {
    transform: ${({ expanded }) => (expanded ? "translateX(-10px)" : "translateX(0)")};
    transition: transform 0.4s ease;
  }

  input {
    width: ${({ expanded }) => (expanded ? "230px" : "0px")};
    opacity: ${({ expanded }) => (expanded ? 1 : 0)};
    padding: ${({ expanded }) => (expanded ? "0 15px" : "0")};
    border: ${({ expanded }) => (expanded ? "1px solid #F9632A" : "none")};
    transition: all 0.4s ease;
    border-radius: 10px;
    height: 30px;
    margin-left: 10px;
    background-color: white;
    color: black;
    overflow: hidden;
  }
`;

export const Nav = styled.nav`
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background: ${({ theme }) => theme.colors.background}; 
    padding: 25px; 
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center; 
    font-size: 20px;
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    text-decoration: none; 
    list-style: none; 
    gap: 15px;

`


export const DivForUlAndLink = styled.div <{ mobile: boolean, tablet: boolean }>`
    display: flex; 
    flex-direction: row; 
    text-decoration: none; 
    gap:${({ mobile }) => mobile ? '10px' : ({ tablet }) => tablet ? '20px' : '40px'}; 
    align-items: center;
`

export const LinkSignIn = styled.a`
  color: ${({ theme }) => theme.colors.hoverText};
` 