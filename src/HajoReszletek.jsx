import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const HajoReszletek = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [hajo, setHajo] = useState(null);

  useEffect(() => {
    axios.get(`https://localhost:7074/api/Hajo/ByName/${name}`)
      .then(res => setHajo(res.data))
      .catch(err => console.error(err));
  }, [name]);

  if (!hajo) return <p>Betöltés...</p>;

  return (
    <div className="text-center">
      <h1>{hajo.nev}</h1>
      <div className="card mx-auto shadow-sm" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <p>Osztály: {hajo.osztaly}</p>
          <p>Felavatva: {hajo.felavatva}</p>
          <p>Ágyúk száma: {hajo.agyukSzama}</p>
          <p>Kaliber: {hajo.kaliber}</p>
          <p>Vízkiszorítás: {hajo.vizkiszoritas}</p>
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
        Vissza a csatahajókhoz
      </button>
    </div>
  );
};

export {HajoReszletek};