import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetFirstResponse, GetSecondResponse, GetThirdResponse } from "./productModel";
import productService from "./productService";
import { AxiosError } from "axios";

export const getFirstAPI = createAsyncThunk(
  "product/getFirstAPI",
  async (id: string, thunkAPI) => {
    try {
      const response = await productService.getFirstAPI();
      const result = response.data as GetFirstResponse;
      return result;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue(axiosError.response?.data as string);
    }
  }
);

export const getSecondAPI = createAsyncThunk(
  "product/getSecondAPI",
  async (_, thunkAPI) => {
    try {
      const response = await productService.getSecondAPI();
      const result = response.data as GetSecondResponse;
      return result;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue(axiosError.response?.data as string);
    }
  }
);

export const getThirdAPI = createAsyncThunk(
  "product/getThirdAPI",
  async (id: string, thunkAPI) => {
    try {
      const response = await productService.getThirdAPI();
      const result = response.data as GetThirdResponse;
      return result;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue(axiosError.response?.data as string);
    }
  }
);
