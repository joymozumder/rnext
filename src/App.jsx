
import { useState } from "react";
import Counter from "./components/Counter"
import Stats from "./components/Stats"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/countersSlice";
import Posts from "./components/Posts";

function App() {
  const counters = useSelector((state)=> state.counters); //state = store's reducer: { counters: countersReducer, videos: videoReducer}
  const dispatch = useDispatch();
  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId)); //only one parameter. for multiple use object
  }
  
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  }



  return (
    <>
     
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          {/* <Counter />
          <Counter /> */}
          {
            counters.map(counter => (
              <Counter key={counter.id} count={counter.value} onIncrement={()=>handleIncrement(counter.id)} onDecrement={()=>handleDecrement(counter.id)} />
            ))
          }
          <Stats totalCount={totalCount}/>

          <Posts/>
        </div>
      </div>
      
    </>
  )
}

export default App
