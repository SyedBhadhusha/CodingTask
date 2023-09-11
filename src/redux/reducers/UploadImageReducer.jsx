import { createSlice } from "@reduxjs/toolkit";

const UploadImageReducer = createSlice({
  name: "Image",
  initialState: [
    {
      id: 1,
      src: null,
    },
    {
      id: 2,
      src: null,
    },
    {
      id: 3,
      src: null,
    },
    {
      id: 4,
      src: null,
    },
  ],
  reducers: {
    addImage: (state, action) => {
      return (state = action.payload);
    },
    removeImage: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addImage, removeImage } = UploadImageReducer.actions;
export default UploadImageReducer.reducer;
