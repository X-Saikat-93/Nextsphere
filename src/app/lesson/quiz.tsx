"use client";

import { challenges, challengeOptions } from "../../../db/schema";
import { useState, useTransition } from "react";
import Confetti from "react-confetti";
import { Header } from "./header";
type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: any;
};

const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage;
  });
  

  
  return (
    <>
      <Confetti
        recycle={false}
        numberOfPieces={500}
        tweenDuration={10000}
        width={50}
        height={50}
      />
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className='flex-1'>
        <div className='h-full flex items-center justify-center'>
          <div className='lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12'>
            <h1 className='text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700'>
            Heading
            </h1>
            <div>
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={challenge.question} />
              )}
              <Challeneg
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedoption}
                disabled={pending}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
