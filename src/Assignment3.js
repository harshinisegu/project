import { useEffect, useState } from "react";

function Assignment3() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            if (res.ok) {
                const resData = await res.json();
                setData(resData);
                console.log(resData);
            }
        }
        fetchMyData();
    }, []);

    const styles = {
        productList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            padding: '20px',
        },
        productItem: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            width: '200px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        productImage: {
            maxWidth: '100%',
            height: 'auto',
            borderBottom: '1px solid #ddd',
            marginBottom: '8px',
        },
        productTitle: {
            fontSize: '16px',
            fontWeight: 'bold',
            margin: '8px 0',
        },
        productPrice: {
            fontSize: '14px',
            color: '#333',
            marginBottom: '8px',
        },
        addToCartButton: {
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        addToCartButtonHover: {
            backgroundColor: '#0056b3',
        }
    };

    return (
        <div style={styles.productList}>
            {data.map((product) => (
                <div key={product.id} style={styles.productItem}>
                    <img src={product.image} alt={product.title} style={styles.productImage} />
                    <h2 style={styles.productTitle}>{product.title}</h2>
                    <p style={styles.productPrice}>₹{product.price}</p>
                    <button 
                        style={styles.addToCartButton}
                        onMouseOver={(e) => e.target.style.backgroundColor = styles.addToCartButtonHover.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = styles.addToCartButton.backgroundColor}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Assignment3;