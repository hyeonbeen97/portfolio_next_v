export default function ProjectItem() {
  const projects = [
    {
      id: 1,
      category: "Category 1",
      title: "Car ShowCase",
      description: "Description for Project 1",
      imageSrc: "https://dummyimage.com/720x400",
      likes: 1200,
      comments: 6,
    },
    {
      id: 2,
      category: "Category 2",
      title: "Project 2",
      description: "Description for Project 2",
      imageSrc: "https://dummyimage.com/720x400",
      likes: 800,
      comments: 3,
    },
    {
      id: 3,
      category: "Category 2",
      title: "Project 2",
      description: "Description for Project 2",
      imageSrc: "https://dummyimage.com/720x400",
      likes: 800,
      comments: 3,
    },
    {
      id: 3,
      category: "Category 2",
      title: "Project 2",
      description: "Description for Project 2",
      imageSrc: "https://dummyimage.com/720x400",
      likes: 800,
      comments: 3,
    },
    {
      id: 3,
      category: "Category 2",
      title: "Project 2",
      description: "Description for Project 2",
      imageSrc: "https://dummyimage.com/720x400",
      likes: 800,
      comments: 3,
    },
  ];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* projects 배열을 .map() 메서드로 반복 */}
            {projects.map((project) => (
              <div key={project.id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={project.imageSrc}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {project.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        View
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
