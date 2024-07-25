import Three from "./Three";
import Two from "./Two";
import Four from "./Four";
import Five from "./Five";

function One(){
    const description = "This is a description of the component.";
    const reviews = [
        "Review 1: This is a great component!",
        "Review 2: Really enjoyed using this component.",
        "Review 3: Highly recommend this component."
    ];


    return ( 
        <div>
            <h1>This is from a component</h1>
            <img src="atom.jpeg" alt="Atoms" />
            <p>{description}</p>
            <div>
                <h2>Reviews : </h2>
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
            
            <Two />
            <Three />
            <Four />
            <Five />
        </div>
    );
}

export default One;