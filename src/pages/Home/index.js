import { useState } from 'react';
import Github from '../../assets/github.png'
import { Input } from '../../components/input';
import { ItemRepo } from '../../components/itemRepo';
import {api} from '../../services/api'

import * as S from './styles'
import { Button } from '../../components/button';

export function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado')

  }

  const handleRemoveRepo = (id) => {
   

    const remove = repos.filter((repo) => repo.id !== id);
    setRepos(remove);
  }
  return (
    <>

    <S.Container>
    <img src={Github} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map((repo, i) => <ItemRepo handleRemoveRepo={handleRemoveRepo} key={i} repo={repo}/>)}
     
    </S.Container>
    
    </>
  );
}


