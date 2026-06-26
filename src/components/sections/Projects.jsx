import ProjectsSectionSkeleton from "./ProjectSectionSkeleton.jsx";
import { RevealOnScroll } from "../RevealOnScroll";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGamepad } from "@fortawesome/free-solid-svg-icons";

const GET_PINNED_ITEMS = gql`
  query {
    viewer {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl

            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Projects = () => {
  const { data, error, loading } = useQuery(GET_PINNED_ITEMS);

  if (loading) return <ProjectsSectionSkeleton />;
  if (error)
    return (
      <div className="bg-black text-white p-4 border-2 border-white font-mono text-center">
        Error: {error.message}
      </div>
    );

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-black text-white font-mono py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Título estilo menú principal */}
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center mb-12 text-white">
            {"// PROYECTOS"}
          </h2>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.viewer.pinnedItems.nodes.map((repo) => (
              /* Tarjeta estilo ranura de guardado RPG (Borde blanco rígido, sombra sólida) */
              <div
                key={repo.name}
                className="p-6 bg-black border-4 border-white flex flex-col justify-between
                                            shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] 
                                            hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] 
                                            hover:-translate-x-1 hover:-translate-y-1 
                                            transition-all duration-100"
              >
                <div>
                  {/* Cabecera del Proyecto */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                      {repo.name}
                    </h3>

                    {/* Botón enlace a GitHub (Flecha) */}
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white text-black p-2 border-2 border-white font-bold
                                                      hover:bg-black hover:text-white transition-colors duration-100"
                      title="Ver repositorio"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-4 h-4"
                      />
                    </a>
                  </div>

                  {/* Descripción */}
                  <p className="text-sm leading-relaxed mb-6 border-t border-dashed border-white/50 pt-3">
                    {repo.description ||
                      "Sin descripción disponible en el repositorio."}
                  </p>
                </div>

                <div>
                  {/* Tags del repositorio */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.repositoryTopics.nodes.map((topic, idx) => (
                      <span
                        key={idx}
                        className="border border-white bg-black text-white px-2 py-0.5 text-xs uppercase font-bold"
                      >
                        {topic.topic.name}
                      </span>
                    ))}
                  </div>

                  {/* Botón para Demo / Jugar (Si existe homepageUrl) */}
                  {repo.homepageUrl && (
                    <div className="w-full">
                      <a
                        href={repo.homepageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="block bg-black text-white py-3 px-4 border-2 border-white text-2xl text-center font-bold uppercase
                                                          shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]
                                                          hover:bg-white hover:text-black hover:shadow-none hover:translate-x-1 hover:translate-y-1
                                                          transition-all duration-100"
                      >
                        <FontAwesomeIcon
                          icon={faGamepad}
                          className="mr-3 inline-block align-middle"
                        />
                        <span className="text-sm tracking-widest inline-block align-middle font-bold">
                          Try it
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
