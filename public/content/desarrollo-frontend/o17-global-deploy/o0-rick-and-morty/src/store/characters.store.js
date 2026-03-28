import { create } from 'zustand';

export const useCharactersStore = create((set) => ({
  charactersData: [],
  setCharactersData: (character) => set(
    (state) => (
      {
        charactersData: [...state.charactersData, character]
      }
    )
  ),
}))
