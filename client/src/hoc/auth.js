/* eslint-disable */
import Axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(auth()).then((response) => {
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push('/login')
          }
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push('/')
          } else {
            props.history.push('/')
          }
        }
      })
    }, [])

    return <SpecificComponent />
  }

  return AuthenticationCheck
}
