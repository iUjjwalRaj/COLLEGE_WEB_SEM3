export default function Counter() {

    const [count, setCount] = useState(0);

    function handleClick(){
        console.log('Button clicked');
        //count++;
        setCount(count + 1);
        console.log(count);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}