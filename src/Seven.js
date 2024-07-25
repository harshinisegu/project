function Seven(){
    const names=["name1","name2","name3","name4"]
    return (
        <div>
            <ul>
                {
                    names.map((names,index)=>
                    <li key={index}>{names}</li>)
                }
            </ul>
        </div>
    );
}
export default Seven;