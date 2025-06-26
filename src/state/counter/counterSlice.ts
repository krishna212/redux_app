import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, (state) => {
console.log("Increment async action is pending");
    });
        builder.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        });
        builder.addCase(incrementAsync.rejected, (state) => {
            console.error("Increment async action was rejected");
        });
        builder.addCase(decrementAsync.pending, (state) => {
            console.log("Decrement async action is pending");
        });
        builder.addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        });
        builder.addCase(decrementAsync.rejected, (state) => {
            console.error("Decrement async action was rejected");
        });
    }
});

export const incrementAsync = createAsyncThunk( // This is an example of an async action
    "counter/incrementAsync",   // we are defining an async action here
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
)
export const decrementAsync = createAsyncThunk(
    "counter/decrementAsync",
    async(amount:number)=>{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
)
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;