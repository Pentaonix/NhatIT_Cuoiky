import React, { useState } from "react";

/* カスタムフック */
import useStorage from "../hooks/storage";

/* ライブラリ */
function Main() {
  
  const [data, index, next, previous] = useStorage();

  return (
    <div>
      <div className="panel-heading">Ten</div>
      <div>{data}</div>
      <div>index: {index+1}</div>
      <div>current: {data[index]}</div>
      <button onClick={()=>{next()}}>Tiep</button>
      <button onClick={()=>{previous()}}>Sau</button>
    </div>
    
  );
}

export default Main;