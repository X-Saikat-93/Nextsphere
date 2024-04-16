import { lessons, units } from "../../../../db/schema";
import { LessonButton } from "./lesson-button";
import { UnitBanner } from "./unit-banner";
type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className='flex items-center flex-col relative'>
        {lessons.map(({ id, completed }, index) => {
          const isCurrent = id === activeLesson?.id;
          const isLocked = !completed && !isCurrent;

          return (
            <LessonButton
              key={id}
              id={id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};