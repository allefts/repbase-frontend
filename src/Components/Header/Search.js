import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <StyledSearch>
      <SearchInput placeholder="What are you looking for?" />
      <AiOutlineSearch className="searchIcon" />
    </StyledSearch>
  );
};

export default Search;

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .searchIcon {
    font-size: clamp(2.5rem, 2.5vw, 3rem);
    padding: 0.5rem;
    background: ${(props) => props.theme.colors.frost};
    border-radius: 50%;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    border: 2px solid transparent;

    &:hover {
      border: 2px solid rgb(41, 50, 61);
    }

    @media (max-width: 380px) {
      border-radius: 2rem;
      width: 100%;
    }
  }

  @media (max-width: 380px) {
    flex-flow: column;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  flex-grow: 1;
  margin-right: 1rem;
  padding: 0.75rem;
  font-size: clamp(0.75rem, 2.5vw, 1.25rem);
  border-radius: 10rem;
  max-width: 600px;
  border: 2px solid ${(props) => props.theme.colors.frost};
  outline: none;
  transition: all 300ms ease-in-out;
  color: rgb(41, 50, 61);

  &:focus,
  &:hover {
    border: 2px solid rgba(41, 50, 61, 1);
  }

  @media (max-width: 380px) {
    margin: 0 0 1rem 0;
  }
`;
