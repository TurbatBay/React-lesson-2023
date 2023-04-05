import React, { useState, useEffect } from 'react';

const URL = 'http://localhost:8282/theaters/list';

interface IGeo {
    type: {
        type: string;
        enum: ["Point"]
        required: true; 
    }
    coordinates: {
        type: number[];
        required: true;
    }
}
interface IAddress {
    street: string;
    city: string;
    state: string;
    zipcode: string;

}

interface ILocation {
    geo: IGeo;
    address: IAddress;

}

interface ITheater {
    theaterId: number;
    name: string;
    location: ILocation;
}


const Movies = (): JSX.Element => {
  const [theaters, setTheaters] = useState<ITheater[]>([]);

  useEffect(() => {
    fetchTheaters();
  }, []);

  const fetchTheaters = async (): Promise<void> => {
    const fetchedData = await fetch(URL);
    const fetchedJson = await fetchedData.json();
    console.log(fetchedJson)
    setTheaters(fetchedJson);
  };

  return (
    <div>
      <h1>Movie list</h1>
      <ul>
        {theaters.map((theater: ITheater, index) => (
          <li key={index}>{theater.theaterId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
