import { StickyWrapper } from "@/components/stickey-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "../../../../db/quaries";
import { redirect } from "next/navigation";
const LearnPage = async () => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <>
      <div className='flex flex-row-reverse gap-[48px] px-6'>
        <StickyWrapper>
          <UserProgress
            // activeCourse={{ id: 1, title: "French", imageSrc: "/fr.svg" }}
            activeCourse={userProgress.activeCourse}
            hearts={5}
            points={176}
            hasActiveSubscription={true}
          />
        </StickyWrapper>
        <FeedWrapper>
          <Header title='French' />
        </FeedWrapper>
      </div>
    </>
  );
};

export default LearnPage;
