import {FC, ReactElement, useEffect} from 'react'

interface Props {
  title:    string
  children: ReactElement
}

const Page:FC<Props> = ({title, children}) => {
  useEffect(() => {
    document.title = title || ''
  })
  return children
}

export default Page