import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ReservationItem } from '../../../interface'

type shopState = {
    shopItems: ReservationItem[]
};

const initialState:shopState = {
    shopItems: []
};

export const shopSlice = createSlice({

    name: 'shops',
    initialState,
    reducers: {
    
        addReservation: (state, action: PayloadAction<ReservationItem>) => {

            if (state.shopItems.length >= 3) {
                alert('You can only reserve 3 shops');
                return;
            }

            state.shopItems.push(action.payload);

        },

        removeReservation: (state, action: PayloadAction<String>) => {

            const remainingShops = state.shopItems.filter(obj => {
                return (
                    obj._id != action.payload
                )
            });

            state.shopItems = remainingShops;
        }

    }
});

export const {addReservation, removeReservation} = shopSlice.actions;
export default shopSlice.reducer;