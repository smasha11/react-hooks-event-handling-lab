// Code Keypad Component Here

function Keypad (){
    function handleEvent(e){
        e.preventDefault()
        console.log('Entering password...');

    }
    return  (
        <form onChange={handleEvent} > 
            <input  type="password" /> 
        </form>
    )
}

export default Keypad;