import { useState } from "react";

export const JobCard = ({ puesto, empresa, ubicacion, descripcion }) => {
    const [isApplied, setIsApplied] = useState(false);
    const text = isApplied ? "Aplicado" : "Aplicar";
    const btnClass = isApplied ? "is-applied" : "";
    const handleIsApplied = () => {
        setIsApplied((prev) => !prev);
    }
    return (
        <article>
            <div>
              <h3>{puesto}</h3>
              <p>{empresa} | {ubicacion}</p>
              <p>
                {descripcion}
              </p>
            </div>
            <button 
                disabled={isApplied}
                className={btnClass}
                onClick={handleIsApplied}>
                    {text}
            </button>
          </article>
    )
}