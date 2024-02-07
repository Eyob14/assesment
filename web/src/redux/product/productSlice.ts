import { createSlice } from "@reduxjs/toolkit";
import {
  GetFirstResponse,
  GetSecondResponse,
  GetThirdResponse,
} from "./productModel";
import { getFirstAPI, getSecondAPI, getThirdAPI } from "./productAPI";

export interface ProductState {
  firstResponse: GetFirstResponse;
  getFirstResponseStatus: "idle" | "loading" | "success" | "failed";
  getFirstResponseError: string;

  secondResponse: GetSecondResponse;
  getSecondResponseStatus: "idle" | "loading" | "success" | "failed";
  getSecondResponseError: string;

  thirdResponse: GetThirdResponse;
  getThirdResponseStatus: "idle" | "loading" | "success" | "failed";
  getThirdResponseError: string;
}

const initialState: ProductState = {
  firstResponse: {} as GetFirstResponse,
  getFirstResponseStatus: "idle",
  getFirstResponseError: "",
  secondResponse: {} as GetSecondResponse,
  getSecondResponseStatus: "idle",
  getSecondResponseError: "",
  thirdResponse: {} as GetThirdResponse,
  getThirdResponseStatus: "idle",
  getThirdResponseError: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // setGetProductListToIdle: (state) => {
    //   state.getProductsStatus = "idle";
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getFirstAPI.pending, (state) => {
        state.getFirstResponseStatus = "loading";
        state.getFirstResponseError = "";
      })
      .addCase(getFirstAPI.fulfilled, (state, { payload }) => {
        state.getFirstResponseStatus = "success";
        state.firstResponse = payload;
      })
      .addCase(getFirstAPI.rejected, (state, { payload }) => {
        state.getFirstResponseStatus = "failed";
        state.getFirstResponseError = String(payload);
      });
    builder
      .addCase(getSecondAPI.pending, (state) => {
        state.getSecondResponseStatus = "loading";
        state.getSecondResponseError = "";
      })
      .addCase(getSecondAPI.fulfilled, (state, { payload }) => {
        state.getSecondResponseStatus = "success";
        state.secondResponse = payload;
      })
      .addCase(getSecondAPI.rejected, (state, { payload }) => {
        state.getSecondResponseStatus = "failed";
        state.getSecondResponseError = String(payload);
      });
    builder
      .addCase(getThirdAPI.pending, (state) => {
        state.getThirdResponseStatus = "loading";
        state.getThirdResponseError = "";
      })
      .addCase(getThirdAPI.fulfilled, (state, { payload }) => {
        state.getThirdResponseStatus = "success";
        state.thirdResponse = payload;
      })
      .addCase(getThirdAPI.rejected, (state, { payload }) => {
        state.getThirdResponseStatus = "failed";
        state.getThirdResponseError = String(payload);
      });
  },
});

// export const { setGetProductListToIdle } = productSlice.actions;

export default productSlice.reducer;
