"use client";

import { challenges, challengeOptions } from "../../../db/schema";
import { useState, useTransition } from "react";
import Confetti from "react-confetti";
import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";
import { Challeneg } from "./challenge";
import { Footer } from "./footer";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { HeartsModal } from "@/components/modals/hearts-model";
import { useHeartsModal } from "../../../store/use-hearts-model";
import { upsertChallenegeProgress } from "../../../actions/challenge-progress";
import { usePracticeModal } from "../../../store/use-practice-modal";
import { useAudio } from "react-use";
import { reduceHearts } from "../../../actions/user-progress";
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
  const router = useRouter();
  const { open: openHeartsModal } = useHeartsModal();

  const { open: openPracticeModal } = usePracticeModal();
  const [correctAudio, _c, correctControls] = useAudio({ src: "/correct.wav" });
  const [incorrectAudio, _i, incorrectControls] = useAudio({
    src: "/incorrect.wav",
  });
  const [finishAudio] = useAudio({ src: "/finish.mp3", autoPlay: true });
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");
  const [pending, startTransition] = useTransition();
  const [hearts, setHearts] = useState(initialHearts);

  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage;
  });
  const [challenges] = useState(initialLessonChallenges);
  const [lessonId, setLessonId] = useState(initialLessonId);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    );
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });
  const challenge = challenges[activeIndex];

  const [selectedoption, setSelectedOption] = useState<number>();
  const options = challenge?.challengeOptions ?? [];
  const title =
    challenge.type === "ASSIST"
      ? "Select the correct meaning"
      : challenge.question;

  const onSelect = (id: number) => {
    if (status != "none") return;

    setSelectedOption(id);
  };
  const onNext = () => {
    setActiveIndex((correct) => correct + 1);
  };
  const onContinue = () => {
    if (!selectedoption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }
    const correctOption = options.find((option) => option.correct);
    if (!correctOption) {
      return;
    }
    if (correctOption && correctOption.id === selectedoption) {
      startTransition(() => {
        upsertChallenegeProgress(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }

            correctControls.play();
            setStatus("correct");
            setPercentage((prev) => prev + 100 / challenges.length);

            //this is practice
            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, 5));
            }
          })
          .catch(() =>
            toast.error("Something went wrong!! please  try again!!")
          );
      });
    } else {
      startTransition(() => {
        reduceHearts(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }
            incorrectControls.play();

            setStatus("wrong");

            if (!response?.error) {
              setHearts((prev) => Math.max(prev - 1, 0));
            }
          })
          .catch(() => toast.error("Something went wrong!! try again!!"));
      });
    }
  };
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
              {title}
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
      <Footer
        lessonId={lessonId}
        status={status}
        onCheck={() => router.push("/learn")}
      />
    </>
  );
};

export default Quiz;
