import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    name: string;
}

const initialState: CounterState = {
    value: 0,
    name: "Curr Value"
};

// Async actions
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

export const decrementAsync = createAsyncThunk(
    "counter/decrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

// Slice with sync reducers and async extraReducers
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.name = `Curr Value incremented by 1`;
        },
        decrement: (state) => {
            state.value -= 1;
            state.name = `Curr Value decremented by 1`;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
            state.name = `Curr Value incremented by ${action.payload}`;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
            state.name = `Curr Value decremented by ${action.payload}`;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload;
            state.name = `Curr Value incremented by ${action.payload} (async)`;
        });
        builder.addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
            state.name = `Curr Value decremented by ${action.payload} (async)`;
        });
    }
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;