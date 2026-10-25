import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      
      <h1>Header componenet</h1>
   <Outlet/>
</div>
  );
}
