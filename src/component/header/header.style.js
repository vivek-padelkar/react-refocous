import styled from 'styled-components'
import { txtColor } from '../../constants/constatntStyle'
import { IoMdTimer } from 'react-icons/io'
import { RiBarChartBoxLine, RiUser3Fill } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import { HiUserCircle } from 'react-icons/hi'

export const Container = styled.div`
  color: ${txtColor};
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 40rem;
  margin: 0 auto;
`
export const Title = styled.span`
  font-size: 26px;
`
export const StyledIoMdTimer = styled(IoMdTimer)``
export const TitleContainier = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  svg {
    font-size: 26px;
  }
`
export const Menucontainer = styled.div`
  display: flex;
  gap: 10px;
  button {
    background-color: #e07470;
    color: white;
    border: none;
    width: 80px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    height: 40px;
    font-weight: 400;
    padding: 10px;
    border-radius: 5px;
    svg {
      color: #fff;
    }
    :last-child svg {
      font-size: 18px;
    }
  }
`
export const BtnReport = styled.button``
export const BtnSetting = styled.button``
export const BtnLogin = styled.button``
export const StyledRiBarChartBoxLine = styled(RiBarChartBoxLine)``
export const StyledFiSettings = styled(FiSettings)``
export const StyledHiUserCircle = styled(HiUserCircle)``
