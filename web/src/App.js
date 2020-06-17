import React, { useState, useEffect } from "react";
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


// Componentes: Bloco chamado de html, css e JS o qual  não interfere no restante da aplicação
// Propriedade: informações que um componente PAI passa para o componente FILHO
// Estado: informações contidas pelo componente "imutabilidade"

function App() {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect( () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          const { latitude, longitude } = position.coords;

          setLatitude(latitude);
          setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  },[] );

  async function handleAddDev(e) {
     e.preventDefaut();
    const response = await api.post('/devs', {
    github_username,
    techs,
    latitude,
    longitude,
  })
  console.log(response.data);

  }
  
  
  return(
   <div id="app">
        <aside>
            <strong>Cadastrar</strong>
            <form onSubmit={handleAddDev}>
                <div className="input-block">
                  <label htmlFor="github_username">Usuário do GitHub</label>
                  <input 
                    name="github_username" 
                    id="github_username" 
                    required value={github_username}
                    onChange={e => setGithub_username(e.target.value)}
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="techs">Tecnologias</label>
                  <input 
                    name="techs" 
                    id="techs" 
                    required value={techs}
                    onChange={e => setTechs(e.target.value)} />
                </div>
                <div className="input-group">
                  <div className="input-block">
                    <label htmlFor= "latitude">latitude</label>
                    <input 
                      type="number" 
                      name="latitude" 
                      id="latitude" 
                      required value={latitude}
                      onChange={ e => setLongitude(e.target.value)} 
                    />
                  </div>  

                  <div className="input-block">
                    <label htmlFor="longitude">longitude</label>
                    <input 
                      type="number" 
                      name="longitude" 
                      id="longitude" 
                      required value={longitude} 
                      onChange={ e => setLatitude(e.target.value)}
                    />
                  </div>
                </div>
              <button type="submit">Salvar</button>
            </form>
        </aside>
        <main>
          <ul>
            <li className="dev-item">
                <header>
                  <img src="https://avatars0.githubusercontent.com/u/46423825?s=460&v=4" alt="Alef oliveira"/>
                  <div className="user-info">
                    <strong>Alef Oliveira</strong>
                    <span> PHP, javaScript, NodeJS</span>
                    </div>
                </header>
                <p>A programmer who loves accounting</p>
                <a href="https://github.com/alefd2">Acessar perfil do Github</a>  
            </li>

            <li className="dev-item">
                <header>
                  <img src="https://avatars0.githubusercontent.com/u/46423825?s=460&v=4" alt="Alef oliveira"/>
                    <div className="user-info">
                    <strong>Alef Oliveira</strong>
                    <span> PHP, javaScript, NodeJS</span>
                    </div>
                </header>
                <p>A programmer who loves accounting</p>
                <a href="https://github.com/alefd2">Acessar perfil do Github</a>  
            </li>

            <li className="dev-item">
                <header>
                  <img src="https://avatars0.githubusercontent.com/u/46423825?s=460&v=4" alt="Alef oliveira"/>
                    <div className="user-info">
                    <strong>Alef Oliveira</strong>
                    <span> PHP, javaScript, NodeJS</span>
                    </div>
                </header>
                <p>A programmer who loves accounting</p>
                <a href="https://github.com/alefd2">Acessar perfil do Github</a>  
            </li>

            <li className="dev-item">
                <header>
                  <img src="https://avatars0.githubusercontent.com/u/46423825?s=460&v=4" alt="Alef oliveira"/>
                    <div className="user-info">
                    <strong>Alef Oliveira</strong>
                    <span> PHP, javaScript, NodeJS</span>
                    </div>
                </header>
                <p>A programmer who loves accounting</p>
                <a href="https://github.com/alefd2">Acessar perfil do Github</a>  
            </li>
          </ul>
        </main>

    </div> 
  );
}

export default App;
