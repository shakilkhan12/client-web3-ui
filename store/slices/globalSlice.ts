import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..';
import { TokenTypes } from '@/types';
const initialState = {
    tokens: [
        {id: 0, label: 'BTC', selected: false},
        {id: 1, label: 'ETH', selected: false},
        {id:2, label: 'USDT', selected: false},
        {id: 3, label: 'XRP', selected: false},
        {id: 4, label: 'ADA', selected: false},
        {id: 5, label: 'STETH', selected: false},
    ],
  }
export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
      tokenSelectOnChange: (state, {payload}) => {
        const copy = [...state.tokens];
        const changed = {...payload, selected: !payload.selected}
        copy[payload.id] = changed;
        state.tokens = copy;
      },
      selectAll: (state) => {
        state.tokens.forEach(token => {
            token.selected = true;
          });
      },
      clearAll: (state) => {
        state.tokens.forEach(token => {
            token.selected = false;
          });
      },
    
      filterTokens: (state, { payload }) => {
        if (payload === '') {
          state.tokens = initialState.tokens;
        } else {
          state.tokens = initialState.tokens.filter(token =>
            token.label.toLowerCase().includes(payload.toLowerCase())
          );
        }
    },  

    }
})
export const {tokenSelectOnChange, selectAll, clearAll, filterTokens} = globalSlice.actions;
export const tokens = (state: RootState) => state.globalSlice.tokens;
export default globalSlice.reducer