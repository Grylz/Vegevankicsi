import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CsataResztvevok = () => {
  const [resztvevok, setResztvevok] = useState([]);
  const navigate = useNavigate();
  const csataNev = "Denmark Strait";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`https://localhost:7074/api/Csata/Resztvevok/${csataNev}`)
      .then(res => {
        setResztvevok(res.data);
      })
      .catch(err => {
        console.error("Hiba a lekérésnél:", err);
      });
  };

  const handleTorles = (hajoNev) => {
    if (window.confirm("Biztosan szeretnéd törölni?")) {
      axios.delete(`https://localhost:7074/api/Kimenet/KimenetTorles/${csataNev}/${hajoNev}`)
        .then(() => {
          alert("Sikeres törlés!");
          navigate('/');
        })
        .catch(err => {
          console.error("Hiba a törlésnél:", err);
        });
    }
  };

  return (
    <div className="text-center">
      <h1 className="my-4">{csataNev}</h1>
      <div className="d-flex flex-column align-items-center">
        {resztvevok.length > 0 ? (
          resztvevok.map((hajoNev, index) => (
            <div key={hajoNev || index} className="card m-2 p-2 shadow-sm" style={{ width: "250px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">{hajoNev}</span>
                <i 
                  className="bi bi-trash text-danger" 
                  style={{ cursor: 'pointer', fontSize: '1.2rem' }}
                  onClick={() => handleTorles(hajoNev)}
                ></i>
              </div>
            </div>
          ))
        ) : (
          <p>Nincsenek résztvevők vagy betöltés...</p>
        )}
      </div>
    </div>
  );
};

export {CsataResztvevok};