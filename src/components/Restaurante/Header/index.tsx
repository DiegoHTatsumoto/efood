import { Background, HeaderContainer, HeaderImg, Restaurant } from './styles'
import Logo from '../../../assets/images/logo.png'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { CartBody } from '../../Components/Cart'
import { ItemsList } from '../../Components/CartListItem'
import { CartEntrega } from '../../Components/CartStep/Endereco'
import { PaymentCart } from '../../Components/CartStep/Pagamento'
import { FinishedCart } from '../../Components/CartStep/Final'
import { Clicked } from '../../../models/CardSlice'
import type { RootState } from '../../../models'

export const RestaurantHeader = () => {
  const Processos = [
    <ItemsList key="items" />,
    <CartEntrega key="entrega" />,
    <PaymentCart key="pagamento" />,
    <FinishedCart key="finalizado" />
  ]

  const Dispatch = useDispatch()
  const ite = useSelector((state: RootState) => state.cart)
  const wasClicked = useSelector((state: RootState) => state.cart.clicked)

  return (
    <Background>
      {wasClicked ? <CartBody>{Processos[ite.step]}</CartBody> : null}
      <HeaderContainer>
        <Restaurant>
          <Link to="/">Restaurantes</Link>
        </Restaurant>
        <HeaderImg src={Logo} />
        <Restaurant onClick={() => Dispatch(Clicked())}>
          {ite.items.length} Produto(s) no carrinho
        </Restaurant>
      </HeaderContainer>
    </Background>
  )
}
