import { useState } from "react";
import JobsList from "./JobsList";

const MainContent = () => {
  const [techFilter, setTechFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [contractFilter, setContractFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");

  return (
    <main>
      <section>
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico.</p>
        <form action="" role="search">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <input
              type="text"
              placeholder="Busca trabajos, empresas o habilidades"
            />
          </div>
        </form>
        <div className="filtros">
          <div>
            <select
              name="tecnologia"
              id="tecnologia"
              value={techFilter}
              onChange={(e) => {
                setTechFilter(e.target.value);
              }}
            >
              Tecnología
              <option value="" disabled>
                Tecnología
              </option>
              <option value="">Todas</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="php">PHP</option>
              <option value="rust">Rust</option>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue.js</option>
              <option value="node">Node.js</option>
              <option value="django">Django</option>
            </select>
          </div>
          <div>
            <select
              name="ubicacion"
              id="ubicacion"
              value={locationFilter}
              onChange={(e) => {
                setLocationFilter(e.target.value);
              }}
            >
              <option value="" disabled>
                Ubicación
              </option>
              <option value="">Todas</option>
              <option value="remoto">Remoto</option>
              <option value="norteamerica">NA</option>
              <option value="europa">EU</option>
              <option value="asia">Asia</option>
              <option value="latam">Latam</option>
              <option value="africa">África</option>
              <option value="oceania">Oceanía</option>
            </select>
          </div>
          <div>
            <select
              name="contrato"
              id="contrato"
              value={contractFilter}
              onChange={(e) => {
                setContractFilter(e.target.value);
              }}
            >
              <option value="" disabled>
                Tipo de contrato
              </option>
              <option value="">Todos</option>
              <option value="fulltime">Tiempo completo</option>
              <option value="parttime">Medio tiempo</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Pasantía</option>
            </select>
          </div>
          <div>
            <select
              name="experiencia"
              id="experiencia"
              value={experienceFilter}
              onChange={(e) => {
                setExperienceFilter(e.target.value);
              }}
            >
              <option value="" disabled>
                Nivel de experiencia
              </option>
              <option value="">Todas</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-level</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead</option>
            </select>
          </div>
        </div>
      </section>
        <JobsList 
            techFilter={techFilter}  
            locationFilter={locationFilter}
            contractFilter={contractFilter}
            experienceFilter={experienceFilter}
            />
      <nav className="pagination">
        <a href="#resultados">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </a>
        <a href="#resultados">1</a>
        <a href="#resultados">2</a>
        <a href="#resultados">3</a>
        <a href="#resultados">4</a>
        <a href="#resultados">5</a>
        <a href="#resultados">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </a>
      </nav>
    </main>
  );
};

export default MainContent;
