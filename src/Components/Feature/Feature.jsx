import {AiFillCheckCircle}from "react-icons/ai"

const Feature = ({feature}) => {
    console.log(feature);
    return (
        <div  >
          <h2 className=" flex items-center  "><AiFillCheckCircle></AiFillCheckCircle> {feature}</h2>  
        </div>
    );
};

export default Feature;