import React from 'react'

import * as S from './styled'

type TProps = {
  children?: React.ReactNode
}

const Box = ({ children }: TProps) => <S.Wrapper>{children}</S.Wrapper>

export default React.memo(Box)
