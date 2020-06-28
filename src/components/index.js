import styled from "styled-components"

export const Main = styled.div`
  max-width: 1200px;
  background-color: ${(props) => props.theme.mainBgColor};
  margin: 0 auto;
`

export const Title = styled.div`
  font-size: 5rem;
  text-align: left;
  padding: 3rem 5rem;
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.buttonColor};
  padding: 1.5rem;
  color: #;
`

export { default as SearchBar } from "./SearchBar"
