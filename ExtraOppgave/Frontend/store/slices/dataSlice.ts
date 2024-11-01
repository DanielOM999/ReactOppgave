import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  trainingMessage: string | null;
  hikingMessage: string | null;
  glassesMessage: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  trainingMessage: null,
  hikingMessage: null,
  glassesMessage: null,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(
      state,
      action: PayloadAction<{ screen: string; message: string }>
    ) {
      state.loading = false;

      if (action.payload.screen === "Training") {
        state.trainingMessage = action.payload.message;
      } else if (action.payload.screen === "Hiking") {
        state.hikingMessage = action.payload.message;
      } else if (action.payload.screen === "Glasses") {
        state.glassesMessage = action.payload.message;
      }
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;
export default dataSlice.reducer;
