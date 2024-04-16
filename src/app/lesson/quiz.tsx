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
          percentage={50}
          hasActiveSubscription={!!userSubscription?.isActive}
        />
      </>
    );
};

export default Quiz;
