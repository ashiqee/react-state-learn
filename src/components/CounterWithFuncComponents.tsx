import ChildComponents from "./ChildComponents";

type TProps = {
    count :number,
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterWithFuncComponents = ({count,setCount}:TProps) => {
  
 
    return (
        <div className='border border-red-600 p-10 m-10'>
            <button className='p-4 bg-pink-600 rounded-md px-6 text-center mx-auto' onClick={()=> setCount(((prev)=> prev+1 ))}>{count}</button>
            <ChildComponents count={count}/>
        </div>
    )
};

export default CounterWithFuncComponents;