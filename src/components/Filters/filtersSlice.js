// ------------------ Redux core ------------------

// const initState = {
//   search: '',
//   status: 'All',
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'filters/searchFilterChange':
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case 'filters/statusFilterChange':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case 'filters/prioritiesFilterChange':
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default: {
//       return state;
//     }
//   }
// };

// export default filtersReducer;

// ------------------ Redux toolkit ------------------

import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'filter',
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
