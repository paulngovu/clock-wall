export const DEGREE_OFFSET = -90;
export const DEFAULT_ANIMATION_SPEED = 2;
export const DEFAULT_DELAY = 0.2
export const DEFAULT_STAGGER_SPEED = 0.02;
export const DIAGONAL = [315, 135];

const ZERO = [
  [
    [0, 90],
    [0, 180],
    [90, 180],
  ],
  [[270, 90], DIAGONAL, [90, 270]],
  [[270, 90], DIAGONAL, [90, 270]],
  [[270, 90], DIAGONAL, [90, 270]],
  [[270, 90], DIAGONAL, [90, 270]],
  [
    [270, 0],
    [180, 0],
    [180, 270],
  ],
];

const ONE = [
  [DIAGONAL, [0, 90], [90, 180]],
  [DIAGONAL, [270, 90], [90, 270]],
  [DIAGONAL, [270, 90], [90, 270]],
  [DIAGONAL, [270, 90], [90, 270]],
  [DIAGONAL, [270, 90], [90, 270]],
  [DIAGONAL, [270, 0], [180, 270]],
];

const TWO = [
  [
    [0, 90],
    [0, 180],
    [90, 180],
  ],
  [
    [270, 0],
    [180, 90],
    [90, 270],
  ],
  [
    [0, 90],
    [270, 180],
    [90, 270],
  ],
  [
    [270, 90],
    [0, 90],
    [180, 270],
  ],
  [
    [270, 90],
    [270, 0],
    [180, 90],
  ],
  [
    [270, 0],
    [180, 0],
    [180, 270],
  ],
];

const THREE = [
  [
    [0, 90],
    [0, 180],
    [90, 180],
  ],
  [
    [270, 0],
    [180, 90],
    [90, 270],
  ],
  [
    [0, 90],
    [270, 180],
    [90, 270],
  ],
  [
    [270, 0],
    [90, 180],
    [90, 270],
  ],
  [
    [90, 0],
    [180, 270],
    [90, 270],
  ],
  [
    [0, 270],
    [180, 0],
    [180, 270],
  ],
];

const FOUR = [
  [
    [0, 90],
    [0, 180],
    [90, 180],
  ],
  [
    [270, 90],
    [90, 270],
    [90, 270],
  ],
  [
    [270, 90],
    [270, 270],
    [90, 270],
  ],
  [
    [270, 0],
    [180, 90],
    [90, 270],
  ],
  [
    DIAGONAL,
    [270, 90],
    [90, 270],
  ],
  [
    DIAGONAL,
    [270, 0],
    [180, 270],
  ],
];

const FIVE = [
  [
    [0, 90],
    [0, 180],
    [90, 180],
  ],
  [
    [270, 90],
    [90, 0],
    [180, 270],
  ],
  [
    [270, 90],
    [0, 270],
    [90, 180],
  ],
  [
    [270, 0],
    [180, 90],
    [90, 270],
  ],
  [
    [0, 90],
    [270, 180],
    [90, 270],
  ],
  [
    [270, 0],
    [180, 0],
    [180, 270],
  ],
];

const SIX = [
  [
    [0, 90],
    [0, 180],
    [90, 180],
  ],
  [
    [270, 90],
    [90, 0],
    [180, 270],
  ],
  [
    [270, 90],
    [0, 270],
    [90, 180],
  ],
  [
    [270, 90],
    [45, 135],
    [90, 270],
  ],
  [
    [270, 90],
    [225, 315],
    [90, 270],
  ],
  [
    [270, 0],
    [180, 0],
    [180, 270],
  ],
];

const SEVEN = [
  [
    [0, 90],
    [0, 180],
    [90, 180],
  ],
  [
    [270, 0],
    [180, 90],
    [90, 270],
  ],
  [DIAGONAL, [270, 90], [90, 270]],
  [DIAGONAL, [270, 90], [90, 270]],
  [DIAGONAL, [270, 90], [90, 270]],
  [DIAGONAL, [270, 0], [180, 270]],
];

const EIGHT = [
  [
    [0, 90],
    [0, 180],
    [90, 180],
  ],
  [
    [270, 90],
    [45, 135],
    [90, 270],
  ],
  [
    [270, 45],
    [225, 315],
    [135, 270],
  ],
  [
    [315, 90],
    [45, 135],
    [90, 225],
  ],
  [
    [270, 90],
    [225, 315],
    [90, 270],
  ],
  [
    [270, 0],
    [180, 0],
    [180, 270],
  ],
];

const NINE = [
  [
    [0, 90],
    [0, 180],
    [90, 180],
  ],
  [
    [270, 90],
    [45, 135],
    [90, 270],
  ],
  [
    [270, 90],
    [225, 315],
    [90, 270],
  ],
  [
    [270, 0],
    [180, 90],
    [90, 270],
  ],
  [
    [0, 90],
    [270, 180],
    [90, 270],
  ],
  [
    [270, 0],
    [180, 0],
    [180, 270],
  ],
];

const NUMBERS = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];

export const generateArrays = (
  minuteDegree: number,
  hourDegree: number,
  length: number
): number[][] => Array(length).fill([minuteDegree, hourDegree]);

export const generateLeftHalf = (hour: number): number[][][] => {
  // First digit
  const tens = NUMBERS[Math.floor((hour % 12) / 10)]

  // Second digit
  const ones = NUMBERS[hour % 12];

  const top = [[0, 90]].concat(Array(6).fill([0, 180]));
  const bottom = [[270, 0]].concat(Array(6).fill([180, 0]));
  const middle = Array(6)
    .fill([[270, 90]])
    .map((row, index) => row.concat(tens[index]).concat(ones[index]));

  const result = [top].concat(middle).concat([bottom]);
  return result;
};

export const generateRightHalf = (minute: number): number[][][] => {
  // First digit
  const tens = NUMBERS[Math.floor(minute / 10)]

  // Second digit
  const ones = NUMBERS[minute % 10]

  const top = Array(6)
    .fill([0, 180])
    .concat([[90, 180]]);
  const bottom = Array(6)
    .fill([180, 0])
    .concat([[180, 270]]);
  const middle = tens
    .map((row, index) => row.concat(ones[index]))
    .map((row) => row.concat([[90, 270]]));

  return [top].concat(middle).concat([bottom]);
};
