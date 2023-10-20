import React,{useState,useEffect} from "react";
function VisitorCount() {
  const[count,setCount] = useState(
    () => Number(window.localStorage.getItem('countvi') || 0)
  );
  useEffect(() => {
    window.localStorage.setItem('countvi',count+1);
    setCount(count+1);
  },[]);


  return (
    <div>visitorCount {count}</div>
  )
}
export default VisitorCount