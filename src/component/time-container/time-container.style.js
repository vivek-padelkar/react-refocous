import styled from 'styled-components'
import { BackgroundColor2 } from '../../constants/constatntStyle'

export const Container = styled.div`
  background-color: ${BackgroundColor2};
  color: white;
  max-width: 40%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`
export const ActionContainer = styled.div``

export const Action = styled.div`
  /* margin-top: 500px; */
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
`
export const ActiveLink = styled.a`
  background-color: rgba(0, 0, 0, 0.2);
`
export const Actionbutton = styled.button`
  font-size: 15px;
  background-color: ${(props) =>
    props.active === true ? 'rgba(0, 0, 0, 0.2)' : 'transparent'};
  border: none;
  text-decoration: none;
  color: inherit;
  margin-top: 15px;
  padding: 10px;
  cursor: pointer;
`
