import { useId } from "react";

export const FiltersForm = ({ onChange }) => {
  const searchFilterId = useId();
  const techFilterId = useId();
  const locationFilterId = useId();
  const contractFilterId = useId();
  const experienceFilterId = useId();

  const handleFormChange = (event) => {
    const jobsFormData = new FormData(event.currentTarget.form);

    const filters = {
      techFilter: jobsFormData.get(techFilterId) || "",
      locationFilter: jobsFormData.get(locationFilterId) || "",
      contractFilter: jobsFormData.get(contractFilterId) || "",
      experienceFilter: jobsFormData.get(experienceFilterId) || "",
      searchFilter: jobsFormData.get(searchFilterId) || "",
    };

    onChange(filters);
  };

  return (
    <form action="" role="search" onSubmit={handleFormChange}>
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
          type="search"
          name={searchFilterId}
          placeholder="Busca trabajos, empresas o habilidades"
          onChange={handleFormChange}
        />
      </div>

      <div className="filtros">
        <div>
          <select
            name={techFilterId}
            id="tecnologia"
            // value=""
            onChange={handleFormChange}
          >
            <option value="" disabled>
              Tecnología
            </option>
            <option value="">Todas</option>
            <optgroup label="Frontend Web">
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="sass">Sass</option>
              <option value="less">Less</option>
            </optgroup>
            <optgroup label="Backend">
              <option value="php">PHP</option>
              <option value="python">Python</option>
              <option value="node">Node.js</option>
              <option value="java">Java</option>
              <option value="go">Go</option>
              <option value="ruby">Ruby</option>
              <option value="perl">Perl</option>
              <option value="rust">Rust</option>
              <option value="scala">Scala</option>
              <option value="elixir">Elixir</option>
            </optgroup>
            <optgroup label="Frameworks y Librerías">
              <option value="react">React</option>
              <option value="vue">Vue.js</option>
              <option value="angular">Angular</option>
              <option value="svelte">Svelte</option>
              <option value="nextjs">Next.js</option>
              <option value="nuxt">Nuxt.js</option>
              <option value="astro">Astro</option>
              <option value="express">Express.js</option>
              <option value="django">Django</option>
              <option value="flask">Flask</option>
              <option value="fastapi">FastAPI</option>
              <option value="laravel">Laravel</option>
              <option value="symfony">Symfony</option>
              <option value="rails">Ruby on Rails</option>
              <option value="spring">Spring Boot</option>
              <option value="adonis">AdonisJS</option>
              <option value="tensorflow">TensorFlow</option>
              <option value="pytorch">PyTorch</option>
              <option value="keras">Keras</option>
              <option value="pandas">Pandas</option>
              <option value="numpy">NumPy</option>
            </optgroup>
            <optgroup label="Bases de Datos">
              <option value="mysql">MySQL</option>
              <option value="postgresql">PostgreSQL</option>
              <option value="sqlite">SQLite</option>
              <option value="mongodb">MongoDB</option>
              <option value="firebase">Firebase</option>
              <option value="redis">Redis</option>
              <option value="mariadb">MariaDB</option>
              <option value="oracle">Oracle</option>
            </optgroup>
            <optgroup label="Móvil">
              <option value="reactnative">React Native</option>
              <option value="flutter">Flutter</option>
              <option value="kotlin">Kotlin</option>
              <option value="swift">Swift</option>
              <option value="ionic">Ionic</option>
              <option value="cordova">Cordova</option>
            </optgroup>
            <optgroup label="Compilados / Sistemas">
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="csharp">C#</option>
              <option value="bash">Bash / Shell</option>
              <option value="powershell">PowerShell</option>
              <option value="assembly">Assembly</option>
            </optgroup>
            <optgroup label="Otros / Misceláneos">
              <option value="docker">Docker</option>
              <option value="kubernetes">Kubernetes</option>
              <option value="aws">AWS</option>
              <option value="gcp">Google Cloud</option>
              <option value="azure">Azure</option>
              <option value="git">Git</option>
              <option value="graphql">GraphQL</option>
              <option value="webpack">Webpack</option>
              <option value="vite">Vite</option>
              <option value="electron">Electron</option>
            </optgroup>
          </select>
        </div>
        <div>
          <select
            name={locationFilterId}
            id="ubicacion"
            // value=""
            onChange={handleFormChange}
          >
            <option value="" disabled>
              Ubicación
            </option>
            <option value="">Todas</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="barcelona">Barcelona</option>
            <option value="bsas">Buenos Aires</option>
            <option value="madrid">Madrid</option>
            <option value="valencia">Valencia</option>
            <option value="bogota">Bogotá</option>
            <option value="lima">Lima</option>
            <option value="santiago">Santiago de Chile</option>
            <option value="monterrey">Monterrey</option>
            <option value="medellin">Medellín</option>
            <option value="sao-paulo">São Paulo</option>
          </select>
        </div>
        <div>
          <select
            name={contractFilterId}
            id="contrato"
            // value=""
            onChange={handleFormChange}
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
            name={experienceFilterId}
            id="experiencia"
            // value=""
            onChange={handleFormChange}
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
    </form>
  );
};
