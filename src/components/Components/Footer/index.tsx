import { FooterContainer, IconsFooter } from './styles'
import Logo from '../../../assets/images/logo.png'
import Instagram from '../../../assets/images/insta.png'
import Facebook from '../../../assets/images/face.png'
import Twitter from '../../../assets/images/x.png'

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <img src={Logo} />
        <IconsFooter>
          <img src={Instagram} />
          <img src={Facebook} />
          <img src={Twitter} />
        </IconsFooter>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade
          <br />
          dos produtos é toda do estabelecimento contratado.
        </p>
      </div>
    </FooterContainer>
  )
}
