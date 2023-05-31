import React from 'react'
import * as S from './styles'

export const Input = ({value, onChange}) => {
  return (
    <>
    <S.Container>
        <input value={value} onChange={onChange} />
    </S.Container>
    </>
  )
}
