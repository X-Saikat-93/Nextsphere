import { StickyWrapper } from "@/components/stickey-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import {
  getUserProgress,
  getUnits,
  getCourseProgress,
  getLessonPercentage,
} from "../../../../db/quaries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";
const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();
  const courseProgressdata = getCourseProgress();
  const [userProgress, units, courseProgress, lessonPercentage] =
    await Promise.all([
      userProgressData,
      unitsData,
      courseProgressdata,
      lessonPercentageData,
    ]);

    if (!userProgress || !userProgress.activeCourse) {
      redirect("/courses");
    }

    if (!courseProgress) {
      redirect("/courses");
    }

  return (
    <>
      <div className='flex flex-row-reverse gap-[48px] px-6'>
        <StickyWrapper>
          <UserProgress
            activeCourse={userProgress.activeCourse}
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={false}
          />
        </StickyWrapper>
        <FeedWrapper>
          <Header title={userProgress.activeCourse.title} />
          {units.map((unit) => (
            <div key={unit.id} className='mb-10'>
              <Unit
                id={unit.id}
                order={unit.order}
                description={unit.description}
                title={unit.title}
                lessons={unit.lessons}
                // activeLesson={undefined}
                // activeLessonPercentage={60}
                activeLesson={courseProgress.activeLesson}
                activeLessonPercentage={lessonPercentage}
              />
            </div>
          ))}
        </FeedWrapper>
      </div>
    </>
  );
};

export default LearnPage;
