export default function CourseSegmentation() {
  const courses = [
    {
      title: 'Program Specific',
      subtitle: 'Certificate, Executive, Post Graduate Certificate',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Industry Specific',
      subtitle: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Topic Specific',
      subtitle: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Level Specific',
      subtitle: 'Senior Leadership, Mid-Career Professionals, Freshers',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="courses" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Tailored Course Segmentation
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore Custom-fit Courses Designed to Address Every Professional Focus
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`h-32 bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                <svg
                  className="w-16 h-16 text-white opacity-80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm">{course.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
