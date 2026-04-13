import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HajoLista = () => {
  const [hajok, setHajok] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7074/api/Hajo/All')
      .then(res => setHajok(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="text-center">
      <h1>Csatahajók:</h1>
      <div className="row">
        {hajok.map((hajo) => (
          <div key={hajo.nev} className="col-md-4 mb-3">
            <Link to={`/hajo/${hajo.nev}`} className="text-decoration-none">
              <div className="card shadow-sm p-4">
                <div className="card-body">
                  <h5 className="card-title text-dark">{hajo.nev}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export {HajoLista};