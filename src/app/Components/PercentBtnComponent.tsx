import React from "react";

interface PercentBtnComponentProps{
    clicked: React.Dispatch<React.SetStateAction<number>>
    percentageLabel:string
    percentage:number
    activePercent:number
}

const PercentBtnComponent = (props:PercentBtnComponentProps) => {
  return (
    <div className="col-span-1">
      <button onClick={() => props.clicked(props.percentage)} className={props.activePercent == props.percentage ? "percentBtn2" : "percentBtn"}>
      {props.percentageLabel}
    </button>
    </div>
    
  );
};

export default PercentBtnComponent;
