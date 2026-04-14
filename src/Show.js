import React from 'react';

const Show = ({data,d}) => {
    console.log(data,d);
 
 
  return <div className='main1'>
       <h1>{data.name}</h1>
       <h1>{data.temp}🌤️</h1>
  </div>;
};

export default Show;
