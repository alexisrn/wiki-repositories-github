import React from 'react'
import * as S from './styles'

export const ItemRepo = ({repo, handleRemoveRepo}) => {
  return (
    <>
    <S.Container onClick={handleRemoveRepo}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer"  target="_blank">Ver Repositório</a><br/>
        <a href=''  className='remove'>Remove</a>
        <hr/>
    </S.Container>
    </>
  )
}
