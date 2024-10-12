import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import restaurantSlice from "./slices/RestaurantSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});
