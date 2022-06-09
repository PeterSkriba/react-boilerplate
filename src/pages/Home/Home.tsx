import React from 'react'

import { AUTHOR } from 'constants/global'

import * as S from './styled'

const Home = () => (
  <S.Wrapper>
    <h1>React Boilerplate</h1>

    <p>
      by{' '}
      <a target="_blank" href={AUTHOR}>
        @PeterSkriba
      </a>
    </p>
  </S.Wrapper>
)

export default React.memo(Home)
