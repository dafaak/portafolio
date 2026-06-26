const ProjectCardSkeleton = () => {
  return (
    /* Tarjeta esqueleto con el mismo borde rígido y sombra del diseño final */
    <div
      className="p-6 bg-black border-4 border-white flex flex-col justify-between
                        shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] 
                        animate-[pulse_1s_steps(2)_infinite]"
    >
      <div>
        {/* Simulador de título y botón superior */}
        <div className="flex justify-between items-start mb-6">
          <div className="h-6 w-1/2 bg-white/40"></div>
          <div className="h-9 w-9 bg-white/40 border-2 border-white/20"></div>
        </div>

        {/* Línea divisoria discontinua simulada */}
        <div className="border-t border-dashed border-white/20 pt-3 mb-6">
          {/* Simulador de descripción (párrafos rígidos) */}
          <div className="h-4 w-full bg-white/20 mb-2"></div>
          <div className="h-4 w-4/5 bg-white/20 mb-2"></div>
          <div className="h-4 w-2/3 bg-white/20"></div>
        </div>
      </div>

      <div>
        {/* Simulador de Tags (bloques cuadrados, sin bordes redondeados) */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="h-6 w-16 bg-white/20 border border-white/10"></div>
          <div className="h-6 w-20 bg-white/20 border border-white/10"></div>
          <div className="h-6 w-12 bg-white/20 border border-white/10"></div>
        </div>

        {/* Simulador del botón grande START DEMO */}
        <div
          className="h-12 w-full bg-white/20 border-2 border-white/20
                                shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)]"
        ></div>
      </div>
    </div>
  );
};

const ProjectsSectionSkeleton = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-black text-white font-mono py-20"
    >
      <div className="max-w-5xl mx-auto px-4 w-full">
        {/* Simulador del título "// PROYECTOS" */}
        <div className="flex justify-center mb-12">
          <div className="h-8 w-56 bg-white/40 animate-[pulse_1s_steps(2)_infinite]"></div>
        </div>

        {/* Grid con las tarjetas falsas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionSkeleton;
