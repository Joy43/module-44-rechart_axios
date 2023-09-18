/* eslint-disable react/prop-types */
import PropsTypes from 'prop-types';

import Feature from '../Feature/Feature';

const Price = ({option}) => {
  const {name,price,features}=option;
    return (
        <div className=' bg-blue-500   rounded-md m-3 p-4 text-white'>
          <h2 className='text-center'>
            <span className='text-5xl '>{price}</span>
            
          </h2>
          <h4 className='text-3xl'>{name}</h4>
        <div className='pl-6 justify-center'>
        {
            features.map((feature,idx)=> <Feature  key={idx} feature={feature}></Feature>)
          }
        </div>
          <div>
            <button className=' bg-black rounded-lg p-3 m-4' >Buy now</button>
          </div>
        </div>
    );
};
Price.prototypes={
    option:PropsTypes.object
}
export default Price;