import { useMediaQuery } from "@mui/material"
import { useDeviceInfo } from "@fe-boilerplate/hooks/useDeviceInfo"
import { AppState } from "@fe-boilerplate/redux"
import { setTempState } from "@fe-boilerplate/redux/vault/actions"
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './Vault.module.scss'


export default function Vault() {
  const { } = useDeviceInfo()
  const isMobile = useMediaQuery("(max-width: 1000px)")

  const dispatch = useDispatch()
  
  const tempState = useSelector((state: AppState) => state.vault.tempState)
  
  const changeState = useCallback(() => {
    dispatch(setTempState(!tempState))
  },[dispatch, tempState])

  useEffect(() => { 
    console.log('is mobile ', isMobile)
  },[])

  return (
    <div>
      <h3>vault page</h3>
      <button onClick={changeState}>temp State</button>
      <span>{tempState.toString()}</span>
    </div>
  )
}