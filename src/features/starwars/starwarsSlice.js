import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  factNumber: 3,
  facts: [
    'У джедаев японские корни',
    'У фильма могло быть другое название',
    'Космические корабли во время съемок не двигались',
    'Эвоки говорят на языке тибетских монахов',
    'Квай-Гон Джинн использовал бритву Gillette в качестве коммуникатора',
  ],
};

export const starwarsSlice = createSlice({
  name: 'starwars',
  initialState,
  reducers: {
    setFactNumber: (state, action) => {
      const newNumber = action.payload;
      if (newNumber >= 1 && newNumber <= state.facts.length) {
        state.factNumber = newNumber;
      }
    },
  },
});

export const { setFactNumber } = starwarsSlice.actions;
export const selectFacts = (state) => state.starwars.facts.slice(0, state.starwars.factNumber);
export const selectFactNumber = (state) => state.starwars.factNumber;

export default starwarsSlice.reducer;
