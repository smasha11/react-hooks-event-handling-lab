// Code EyesOnMe Component Here
function EyesOnMe(){
    function focus(){
        console.log('Good!');
    }
    function handleEvent(){
        console.log('Hey! Eyes on me!')
    }
    return <button onBlur={handleEvent} onFocus={focus}>Eyes on me</button>

}
export default EyesOnMe;
