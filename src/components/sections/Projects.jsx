import ProjectsSectionSkeleton from './ProjectSectionSkeleton.jsx';
import {RevealOnScroll} from "../RevealOnScroll"
import {gql} from '@apollo/client';
import {useQuery} from "@apollo/client/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as byPrefixAndName from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";

const GET_PINNED_ITEMS = gql`query {
  viewer {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          name
          description
          url
                  
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
}`;

export const Projects = () => {

    const {data, error, loading} = useQuery(GET_PINNED_ITEMS);

    if (loading) return <ProjectsSectionSkeleton/>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 ">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8
            bg-gradient-to-r from-cyan-300 to-purple-600
            bg-clip-text text-transparent text-center">Proyectos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {data.viewer.pinnedItems.nodes.map((repo, index) => (


                            <div key={repo.name} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                                <div className=" flex  justify-between align-items-baseline mt-6 ">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                                    </div>

                                    <div>
                                        <a href={repo.url} target='_blank'
                                           className=" bg-purple-600 text-white py-2 px-4 rounded-lg font-medium transition
                 relative overflow-hidden
                 hover:shadow-[0_0_15px_rgba(190,130,246,0.4)]">
                                            <FontAwesomeIcon icon={faArrowRight}/>
                                        </a>
                                    </div>


                                </div>
                                <p className="text-gray-400 mb-4">{repo.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {repo.repositoryTopics.nodes.map((topic, index) => (
                                        <span key={index}
                                              className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">
                                {topic.topic.name}
                            </span>))}
                                </div>

                            </div>

                        ))}

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}