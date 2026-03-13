import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../models'
import { CartItems } from '../CartItem'
import { CartItemListDiv, Total, TotalWrite } from './styles'
import { ContinueButton } from '../BotaoContinuar'
import { NextFunction } from '../../../models/CardSlice'

export const ItemsList = () => {
  const Dispatch = useDispatch()

  const items = useSelector((state: RootState) => state.cart.items)

  const verifyCart = () => {
    if (items.length === 0) {
      return alert('Você não pode continuar com o carrinho vazio')
    }
    return Dispatch(NextFunction())
  }

  const TotalPrice = items
    .reduce((acc, item) => acc + Number(item.preco), 0)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  return (
    <>
      <CartItemListDiv>
        {items.map((item) => (
          <CartItems
            key={item.nome}
            item={item}
            img={item.foto}
            price={item.preco}
            title={item.nome}
          />
        ))}
      </CartItemListDiv>
      <Total>
        <TotalWrite>Valor Total:</TotalWrite>
        <TotalWrite>{TotalPrice}</TotalWrite>
      </Total>
      <ContinueButton onClick={() => verifyCart()}>
        Continuar para a Entrega
      </ContinueButton>
    </>
  )
}
