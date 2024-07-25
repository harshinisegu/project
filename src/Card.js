import Zero from "./Zero";
function CardUI(props) {
    const width = 350;
    const height = 300;
    return (
        <div className="card" style={{ width: '1890px', height: '850px' }}>
            <h1><b>German shepard</b></h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                    src ="dog image.jpeg" 
                    width={width} 
                    height={height} 
                    alt="pic" 
                    style={{ border: '1px solid #FF0000', borderRadius: '10px', marginRight: '20px' }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1>{props.userFromArray}</h1>
                    <h3 style={{fontSize:'18pxs'}}>Description<br />{props.user.Description}</h3>
                    <h3>Price: {props.user.Price}</h3>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ width: '100px', height: '40px', fontSize: '14px' }}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>Product Specifications:</h3>
                <ul>
                    <li>Intelligence: Highly intelligent, often ranked among the top three most intelligent dog breeds.</li>
                    <li>Trainability: Very trainable due to their intelligence and eagerness to please.</li>
                    <li>Loyalty: Extremely loyal and protective of their family.</li>
                    <li>Energy Level: High energy, requires regular exercise and mental stimulation.</li>
                    <li>Socialization: Needs early socialization to become well-rounded adults; can be aloof with strangers but should not be aggressive if properly socialized.</li>
                </ul>
            </div>
            <div>
            <hr style={{ margin: '20px 0' }} />
            <h1>Reviews</h1>
            <Zero />
        </div>

        </div>
    );
}

export default CardUI;