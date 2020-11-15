import React, { useEffect, useState } from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'  // caso a renderizacao do mapa de alg probl
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="map" />
          <h2>Escolha um orfanato do mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>
        <footer>
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
        center={[-19.9292425, -43.9458236,]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {orphanages.map(orphanage => {
          return (
            <Marker key={orphanage.id} position={[orphanage.latitude, orphanage.longitude]} icon={mapIcon}>
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}><FiArrowRight size={20} color="#FFF" /></Link>
              </Popup>
            </Marker>
          )
        })}

      </Map>
      <div>
        <Link to="/orphanages/create" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
      </div>
    </div>
  );
}

export default OrphanagesMap;

