import {
  Container,
  Title,
  StyledIoMdTimer,
  TitleContainier,
  Menucontainer,
  BtnReport,
  BtnSetting,
  BtnLogin,
  StyledRiBarChartBoxLine,
  StyledFiSettings,
  StyledHiUserCircle,
} from './header.style'

const Header = () => {
  return (
    <Container>
      <TitleContainier>
        <StyledIoMdTimer />
        <Title>ReFocus</Title>
      </TitleContainier>

      <Menucontainer>
        <BtnReport>
          <StyledRiBarChartBoxLine />
          <span>Report</span>
        </BtnReport>

        <BtnSetting>
          <StyledFiSettings />
          <span>Setting</span>
        </BtnSetting>

        <BtnLogin>
          <StyledHiUserCircle />
          <span>Login</span>
        </BtnLogin>
      </Menucontainer>
    </Container>
  )
}

export default Header
