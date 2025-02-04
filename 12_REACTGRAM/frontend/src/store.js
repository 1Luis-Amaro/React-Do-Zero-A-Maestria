import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";  // OK
import userReducer from "./slices/userSlice";  // ✅ Importação correta

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
