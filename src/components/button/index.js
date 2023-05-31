import React from 'react'
import * as S from './styles'

export const Button = ({onClick}) => {
  return (
    <>
    <S.Container onClick={onClick}>
        Buscar
    </S.Container>
    </>
  )
}
