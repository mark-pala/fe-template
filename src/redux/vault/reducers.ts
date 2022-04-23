import { createReducer } from '@reduxjs/toolkit'
import { 
  setTempState
} from './actions'

export interface VaultState {
    readonly tempState: boolean
}
  
const initialState: VaultState = {
  tempState: false,
}

const vault = createReducer<VaultState>(initialState, (builder) =>
  builder
    .addCase(
      setTempState,
      (state: any,action: any) => {
        return {
          ...state,
          tempState: action.payload,
        }
      },
    )
)
export default vault