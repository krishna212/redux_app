import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount, incrementAsync, decrementAsync } from "../state/counter/counterSlice";
import type { RootState } from "../state/store";
import type { AppDispatch } from "../state/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const name = useSelector((state: RootState) => state.counter.name);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <h2>{name}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        <button onClick={() => dispatch(decrementByAmount(3))}>Decrement by 3</button>
        <button onClick={() => dispatch(incrementAsync(7))}>Increment Async by 7</button>
        <button onClick={() => dispatch(decrementAsync(4))}>Decrement Async by 4</button>
      </div>
    </div>
  );
};

export default Counter;