import {
  DIAGONAL,
  generateArrays,
  generateLeftHalf,
  generateRightHalf,
} from "./util";

export const DEFAULT_GRID: number[][][] = Array(8).fill(
  Array(15).fill([270, 270])
);

export const RANDOM_GRID = (): number[][][] =>
  DEFAULT_GRID.map((row) =>
    row.map(() => [Math.random() * 360, Math.random() * 360])
  );

export const BOX_GRID: number[][][] = [
  [[0, 90]].concat(Array(13).fill([0, 180])).concat([[90, 180]]),
  [
    [270, 90],
    [0, 90],
  ]
    .concat(Array(11).fill([0, 180]))
    .concat([
      [90, 180],
      [90, 270],
    ]),
  generateArrays(270, 90, 2)
    .concat([[0, 90]])
    .concat(Array(9).fill([0, 180]))
    .concat([[90, 180]])
    .concat(generateArrays(90, 270, 2)),
  generateArrays(270, 90, 3)
    .concat([[0, 90]])
    .concat(Array(7).fill([0, 180]))
    .concat([[90, 180]])
    .concat(generateArrays(90, 270, 3)),
  generateArrays(270, 90, 3)
    .concat([[270, 0]])
    .concat(Array(7).fill([0, 180]))
    .concat([[180, 270]])
    .concat(generateArrays(90, 270, 3)),
  generateArrays(270, 90, 2)
    .concat([[270, 0]])
    .concat(Array(9).fill([0, 180]))
    .concat([[180, 270]])
    .concat(generateArrays(90, 270, 2)),
  [
    [270, 90],
    [270, 0],
  ]
    .concat(Array(11).fill([0, 180]))
    .concat([
      [180, 270],
      [90, 270],
    ]),
  [[270, 0]].concat(Array(13).fill([180, 0])).concat([[180, 270]]),
];

export const CROSS_GRID = [
  Array(7).fill([45, 225]).concat([[225, 315]]).concat(Array(7).fill([135, 315])),
  Array(7).fill([45, 225]).concat([[225, 315]]).concat(Array(7).fill([135, 315])),
  Array(7).fill([45, 225]).concat([[225, 315]]).concat(Array(7).fill([135, 315])),
  Array(7).fill([45, 225]).concat([[225, 315]]).concat(Array(7).fill([135, 315])),
  Array(7).fill([315, 135]).concat([[45, 135]]).concat(Array(7).fill([225, 45])),
  Array(7).fill([315, 135]).concat([[45, 135]]).concat(Array(7).fill([225, 45])),
  Array(7).fill([315, 135]).concat([[45, 135]]).concat(Array(7).fill([225, 45])),
  Array(7).fill([315, 135]).concat([[45, 135]]).concat(Array(7).fill([225, 45])),
];

export const WAVE_GRID: number[][][] = DEFAULT_GRID.map((row) => row.map(([hour, minute]) => [hour + 360, minute + 360]));

export const CURRENT_TIME_GRID = (): number[][][] => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Build left half with hours
  const left = generateLeftHalf(hours);

  // Build right half with minutes
  const right = generateRightHalf(minutes);

  // Combine
  const middle: number[][][] = [
    [[0, 180]],
    [DIAGONAL],
    [[45, 135]],
    [[225, 315]],
    [[45, 135]],
    [[225, 315]],
    [DIAGONAL],
    [[180, 0]],
  ];

  return left
    .map((row, index) => row.concat(middle[index]))
    .map((row, index) => row.concat(right[index]));
};

export const ALL_GRIDS = [
  DEFAULT_GRID,
  RANDOM_GRID,
  BOX_GRID,
  CROSS_GRID,
  CURRENT_TIME_GRID,
];
