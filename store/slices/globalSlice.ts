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
    pool: [
        {id: 0, label: 'veBUG', selected: false},
        {id: 1, label: 'Stable', selected: false},
        {id:2, label: 'Volatile', selected: false},
        {id: 3, label: 'Boosted', selected: false},
        {id: 4, label: 'Stacked', selected: false},
    ],
    votes: [
      {id: 1, label: 'Your veWASP', value: '150.123K'},
      {id: 2, label: 'Average APR', value: '120.51%'},
      {id: 3, label: 'Epach 10 ends in', value: '5d 23h 19m'},
      {id: 4, label: 'Total Bribes', value: '14,199.40$'},
      {id: 5, label: 'Total Fees', value: '5,99.5$'},
    ],
    modelState: false
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
    // Pool
    poolSelectOnChange: (state, {payload}) => {
      const copy = [...state.pool];
      const changed = {...payload, selected: !payload.selected}
      copy[payload.id] = changed;
      state.pool = copy;
    },
    poolsSelectAll: (state) => {
      state.pool.forEach(token => {
          token.selected = true;
        });
    },
    poolcClearAll: (state) => {
      state.pool.forEach(token => {
          token.selected = false;
        });
    },
    toggleModel: (state) => {
      state.modelState = !state.modelState;
    }

    }
})
export const {tokenSelectOnChange, selectAll, clearAll, filterTokens,poolcClearAll,poolsSelectAll,poolSelectOnChange, toggleModel} = globalSlice.actions;
export const tokens = (state: RootState) => state.globalSlice.tokens;
export const pools = (state: RootState) => state.globalSlice.pool;
export const votes = (state: RootState) => state.globalSlice.votes;
export const modelState = (state: RootState) => state.globalSlice.modelState
export default globalSlice.reducer