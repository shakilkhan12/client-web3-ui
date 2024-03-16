'use client'
import { Provider } from 'react-redux'
import { store } from './index'
import { ReactElement } from 'react'
type PropTypes = {
    children: ReactElement
}
const ReduxProvider = ({children}: PropTypes) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxProvider