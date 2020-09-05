/**
 * テーブル
 * Table GUI Parts Component
 * @headers テーブルヘッダー
 * @bodys テーブルボディ
 */
import React  from 'react'
import styled from 'styled-components'

// Assets
import {mainColor} from '@assets/js/variables'

interface Props {
  headers?: string[]
  bodys?:   string[]
}

export const Table:React.FC<Props> = ({headers, bodys}) => (
  <StyledTable>
    <StyledHeader>
      <tr>
        {(headers || ['title']).map((h, i) => (
          <StyledTh key={i} children={h} />
        ))}
      </tr>
    </StyledHeader>

    <StyledBody>
      <tr>
        {(bodys || ['body']).map((b, i) => (
          <StyledTd key={i} children={b} />
        ))}
      </tr>
    </StyledBody>
  </StyledTable>
)

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  tr:last-child td:first-child {
    border-radius: 0 0 0 5px;
  }

  tr:last-child td:last-child {
    border-radius: 0 0 5px 0;
  }
`

const StyledTh = styled.th`
  text-align: center;
  color:white;
  background: linear-gradient(#829ebc,${mainColor});
  border-left: 1px solid #3c6690;
  border-top: 1px solid #3c6690;
  border-bottom: 1px solid #3c6690;
  box-shadow: 0px 1px 1px rgba(255,255,255,0.3) inset;
  padding: 10px 0;
`

const StyledHeader = styled.thead`
  ${StyledTh}:first-child {
    border-radius: 5px 0 0 0;
  }
  ${StyledTh}:last-child {
    border-radius: 0 5px 0 0;
    border-right: 1px solid #3c6690;
  }
`

const StyledTd = styled.td`
  text-align: center;
  border-left: 1px solid #a8b7c5;
  border-bottom: 1px solid #a8b7c5;
  border-top:none;
  box-shadow: 0px -3px 5px 1px #eee inset;
  padding: 10px 0;
`

const StyledBody = styled.tbody`
  ${StyledTd}:last-child {
    border-right: 1px solid #a8b7c5;
  }
`