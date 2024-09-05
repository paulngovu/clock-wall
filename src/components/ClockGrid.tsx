import { EasingDefinition } from "framer-motion";
import { Box, Button, CheckBox, RangeInput, Select, Text } from "grommet";
import { FC, useEffect, useState } from "react";
import {
  ALL_GRIDS,
  BOX_GRID,
  CROSS_GRID,
  CURRENT_TIME_GRID,
  DEFAULT_GRID,
  RANDOM_GRID,
  WAVE_GRID,
} from "../grids";
import { Clock } from "./Clock";

export interface ClockGridProps { }

export const ClockGrid: FC<ClockGridProps> = (_: ClockGridProps) => {
  const [clockGridValues, setClockGridValues] = useState(DEFAULT_GRID);
  const [isCycling, setIsCycling] = useState(false);
  const [isWave, setIsWave] = useState(false);
  const [cyclingIndex, setCyclingIndex] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(2);
  const [ease, setEase] = useState<EasingDefinition>("easeInOut");
  const [seconds, setSeconds] = useState(0);

  const setGrid = (grid: number[][][] | (() => number[][][])) => {
    if (!isCycling) {
      setClockGridValues(grid);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCyclingIndex((cyclingIndex + 1) % ALL_GRIDS.length);
  }, [seconds]);

  useEffect(() => {
    if (isCycling) {
      setClockGridValues(ALL_GRIDS[cyclingIndex]);
    }
  }, [cyclingIndex]);

  return (
    <Box pad="small">
      <Box direction="row" gap="medium">
        <Button
          primary
          label="Reset"
          onClick={() => setGrid(DEFAULT_GRID)}
          disabled={isCycling}
        />
        <Button
          primary
          label="Randomize"
          onClick={() => setGrid(RANDOM_GRID)}
          disabled={isCycling}
        />
        <Button
          primary
          label="Box"
          onClick={() => setGrid(BOX_GRID)}
          disabled={isCycling}
        />
        <Button
          primary
          label="Cross"
          onClick={() => setGrid(CROSS_GRID)}
          disabled={isCycling}
        />
        <Button
          primary
          label="Wave"
          onClick={() => setGrid(WAVE_GRID)}
          disabled={isCycling || !isWave}
        />
        <Button
          primary
          label="Current time"
          onClick={() => setGrid(CURRENT_TIME_GRID)}
          disabled={isCycling}
        />

        <CheckBox
          checked={isWave}
          label="Wave"
          onChange={(event) => setIsWave(event.target.checked)}
        />

        <CheckBox
          checked={isCycling}
          label="Cycle through animations"
          onChange={(event) => setIsCycling(event.target.checked)}
        />

        <Select
          options={[
            "linear",
            "easeIn",
            "easeOut",
            "easeInOut",
            "circIn",
            "circOut",
            "circInOut",
            "backIn",
            "backOut",
            "backInOut",
            "anticipate",
          ]}
          value={ease}
          onChange={({ option }) => setEase(option)}
        />
        <Box>
          <RangeInput
            min="0.1"
            max="5"
            step={0.1}
            value={animationSpeed}
            onChange={({ target }) =>
              setAnimationSpeed(parseFloat(target.value))
            }
          />
          <Text>{animationSpeed}</Text>
        </Box>
      </Box>
        <Box pad="medium">
          {clockGridValues.map((clockArray, yIndex) => (
            <div key={yIndex} style={{ display: "flex" }}>
              {clockArray.map(([hour, minute], xIndex) => (
                  <Clock
                    key={`(${xIndex}, ${yIndex})`}
                    hourDegrees={hour}
                    minuteDegrees={minute}
                    animationSpeed={animationSpeed}
                    easing={ease}
                    clockIndex={isWave ? yIndex * xIndex : undefined}
                  />
              ))}
            </div>
          ))}
        </Box>
    </Box>
  );
};
