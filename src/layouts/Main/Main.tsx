import React from 'react'
import { Outlet } from 'react-router'

import * as S from './styled'

const Main = () => (
  <S.Wrapper>
    <Outlet />
  </S.Wrapper>
)

export default Main
