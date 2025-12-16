const ProjectCardSkeleton = () => {
    return (
        <div className="p-6 rounded-xl border border-white/10 transition
        bg-gray-800/50 animate-pulse">

            <div className="h-6 w-3/5 bg-gray-700 rounded mb-3"></div>

            <div className="h-4 w-4/5 bg-gray-700 rounded mb-5"></div>

            <div className="flex flex-wrap gap-2 mb-4">
                <div className="h-7 w-16 bg-gray-700 rounded-full"></div>
                <div className="h-7 w-20 bg-gray-700 rounded-full"></div>
                <div className="h-7 w-12 bg-gray-700 rounded-full"></div>
                <div className="h-7 w-18 bg-gray-700 rounded-full"></div>
            </div>

            <div className="flex justify-between mt-6 items-center">
                <div className="h-4 w-1/4 bg-gray-700 rounded"></div>
            </div>
        </div>
    );
};

const ProjectsSectionSkeleton = () => {
    return (
        <section id="projects" className=" flex items-center justify-center py-20 ">
            <div className="max-w-5xl mx-auto px-4 w-full">
                <div className="flex justify-center mb-8">
                    <div className="h-8 w-48 bg-gray-700 rounded-md animate-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCardSkeleton/>
                    <ProjectCardSkeleton/>
                    <ProjectCardSkeleton/>
                    <ProjectCardSkeleton/>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSectionSkeleton;