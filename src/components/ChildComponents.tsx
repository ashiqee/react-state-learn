import React from 'react';

const ChildComponents = ({count}:{count:number}) => {
    return (
        <div className='p-10 m-10 border border-slate-700'>
            {count}
            
        </div>
    );
};

export default ChildComponents;