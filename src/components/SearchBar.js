import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Input = styled.input`
  width: 90%;
  padding: 1.5rem;
  color: ${(props) => props.theme.fontColor};
  font-size: 1.4rem;
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  border-radius: 1rem;
  background-color: ${(props) => props.theme.mainBgColor};
  outline: none;
`

const SearchBar = () => {
  return (
    <div>
      <Input type="text" placeholder="Search" />
    </div>
  )
}

export default SearchBar
