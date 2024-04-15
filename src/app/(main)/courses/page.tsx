import { getCourses, } from "../../../../db/quaries";

import { List } from "./list";
const CoursesPage = async () => {
  const coursesData = getCourses();
//   const userProgressData = getUserProgress();

  const [courses, ] = await Promise.all([
    coursesData,
    // userProgressData,
  ]);

  return (
    <div className='h-full max-w-[912px] px-3 mx-auto'>
      <h1 className='text-2xl font-bold text-neutral-700'>Language Courses</h1>
          <List courses={courses} activeCourseId={3} />
         
    </div>
  );
};

export default CoursesPage;
