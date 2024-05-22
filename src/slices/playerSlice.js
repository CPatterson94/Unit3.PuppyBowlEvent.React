import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/index";
const playerSlice = createSlice({
  name: "puppy",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload.data.players;
      }
    );

    builder.addMatcher(
      api.endpoints.addPlayer.matchFulfilled,
      (state, { payload }) => {
        state.push(payload.data.newPlayer);
        return state;
      }
    );

    builder.addMatcher(
      api.endpoints.deletePlayer.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);

        return state;
      }
    );
  },
});

export default playerSlice.reducer;
