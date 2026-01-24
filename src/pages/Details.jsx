import { useParams } from "react-router";

export function JobDetails() {
    const { jobId } = useParams();
    return (
        <main>
            <section>
                <h1>Detalles del empleo</h1>
                <p>La id es: {jobId}</p>
            </section>
        </main>
    );
}