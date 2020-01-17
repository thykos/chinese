export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomQuestion = (max = 1, reserved = []) => {
  const list = Array
    .from({ length: max })
    .map((item, idx) => idx)
    .filter(item => !reserved.includes(item));
  return list[random(0, list.length)];
};

export const randomQuestionsList = (max, count, reserved) => {
  let list = [];
  const iterations = Array.from({ length: count }).map((item, idx) => idx);
  iterations.forEach(item => {
    list = [...list, randomQuestion(max, [...list, reserved])];
  });
  return list;
};
