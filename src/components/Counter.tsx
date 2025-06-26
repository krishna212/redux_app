import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, incrementAsync, decrementAsync } from "../state/counter/counterSlice";
import { AppDispatch, type RootState } from "../state/store"; // Adjust path as needed

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrementAsync(12))}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;