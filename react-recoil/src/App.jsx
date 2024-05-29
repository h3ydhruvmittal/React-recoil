import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons/>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("button")
  return (
    <div>
      <button
        onClick={() => {
          setCount(c => c + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count => count - 1);
        }}
      >
        Decrease
      </button>
      <EvenOdd/>
    </div>
  );
}
function EvenOdd(){
  const isEvenOdd = useRecoilValue(evenSelector);
  return <div>
    {(isEvenOdd ? "It is even": "It is odd")}
  </div>
  
}

export default App;
