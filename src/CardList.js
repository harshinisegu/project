import CardUI from "./Card";

function CardListUI() {
    const name = "ReactJS";
    const college = "SVECW";
    const userObject = { Description: "The German Shepherd, also known as the Alsatian in some parts of the world, is a large-sized breed of dog that originated in Germany.", Price: "Rs 19999" };
    const users = ["Dog Image"];
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                users.map((user, index) => (
                    <CardUI key={index}
                        program={name}
                        col={college}
                        user={userObject}
                        userFromArray={user} />
                ))
            }
        </div>
    );
}

export default CardListUI;