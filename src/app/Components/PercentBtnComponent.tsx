import React from "react";

interface PercentBtnComponentProps{
    clicked: React.Dispatch<React.SetStateAction<number>>
    percentageLabel:string
    percentage:number
}

const PercentBtnComponent = (props:PercentBtnComponentProps) => {
  return (
    <button onClick={() => props.clicked(props.percentage)} className="percentBtn">
      {props.percentageLabel}
    </button>
  );
};

export default PercentBtnComponent;
