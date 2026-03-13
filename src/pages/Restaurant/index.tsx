import { useParams } from 'react-router'
import { RestaurantBanner } from '../../components/Restaurante/Banner'
import { RestaurantBody } from '../../components/Restaurante/Body'
import { RestaurantHeader } from '../../components/Restaurante/Header'
import { Footer } from '../../components/Components/Footer'
import { useState } from 'react'
import Erro from '../../assets/images/erro.jpg'
import { ErrorDiv } from './styles'
import { Modal } from '../../components/Components/Modal'
import { useGetRestaurantByIdQuery } from '../../models/api'

export type RestaurantType = {
  id: number
  titulo: string
  descricao: string
  tipo: string
  capa: string
  avaliacao: number
  cardapio: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }[]
}

export const Restaurant = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetRestaurantByIdQuery(Number(id))

  const [clicked, setClicked] = useState(false)
  const [ItemSelected, setItemSelected] = useState(-1)

  const HandleCloseClicked = (n: boolean) => {
    setClicked(n)
  }
  const HandleChangeClicked = (data: boolean, id: number) => {
    if (!data) return
    setItemSelected(id)
    setClicked(data)
  }
  if (isLoading)
    return (
      <ErrorDiv>
        <span>Carregando...</span>
      </ErrorDiv>
    )
  if (!data)
    return (
      <ErrorDiv>
        <img src={Erro} alt="Erro" />
      </ErrorDiv>
    )
  return (
    <>
      {clicked && data && (
        <Modal
          prato={data.cardapio[ItemSelected]}
          Clicked={HandleCloseClicked}
          key={data.titulo}
        />
      )}
      <RestaurantHeader />
      <RestaurantBanner desc={data.titulo} title={data.tipo} img={data.capa} />
      <RestaurantBody
        HandleChangeClicked={HandleChangeClicked}
        Cardapio={data ? data.cardapio : []}
      />
      <Footer />
    </>
  )
}
