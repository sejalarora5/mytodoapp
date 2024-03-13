import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'; // Import CSS module
import Card from '../Card/Card';

const CardContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      getResponse();
    }, []);
  
    async function getResponse() {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products',
          {
            method: 'GET',
          }
        );
        const responseData = await response.json();
        console.log(responseData)
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
  return (
    <div>
      <p className={styles.title}>Card Container</p>
      <div className={styles.cardContainer}>
        {data.map((item, index) => (
          <Card
            key={index}
            imageURl={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>    
    </div>

  );
};

export default CardContainer;