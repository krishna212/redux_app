import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../state/counter/counterSlice";
import type { RootState } from "../state/store"; // Adjust path as needed

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;