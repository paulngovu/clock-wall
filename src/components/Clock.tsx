import { Easing, motion } from "framer-motion";
import { FC } from "react";
import "../styles.css";
import { DEFAULT_ANIMATION_SPEED, DEGREE_OFFSET, DEFAULT_DELAY, DEFAULT_STAGGER_SPEED } from "../util";

export interface ClockProps {
  hourDegrees: number;
  minuteDegrees: number;
  animationSpeed?: number;
  easing?: Easing;
  clockIndex?: number;
}

export const Clock: FC<ClockProps> = (props: ClockProps) => {
  const ease = props.easing ?? "easeInOut";
  const index = props.clockIndex ?? 0;
  const speed = props.animationSpeed ?? 1;
  const totalDelay  = index * DEFAULT_STAGGER_SPEED * speed;

  return (
    <div className="analog-clock">
      <motion.div
        className="dial-minutes"
        animate={{ rotate: props.minuteDegrees - DEGREE_OFFSET }}
        transition={{
          ease: ease,
          duration: props.animationSpeed ?? DEFAULT_ANIMATION_SPEED,
          delay: totalDelay
        }}
      />
      <motion.div
        className="dial-hours"
        animate={{ rotate: props.hourDegrees - DEGREE_OFFSET }}
        transition={{
          ease: ease,
          duration: props.animationSpeed ?? DEFAULT_ANIMATION_SPEED,
          delay: props.clockIndex === undefined ? 0 : totalDelay + (DEFAULT_DELAY * speed),
        }}
      />
    </div>
  );
};
