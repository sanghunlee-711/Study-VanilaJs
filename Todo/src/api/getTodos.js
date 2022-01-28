const { faker } = window;

const createElement = () => ({
  text: faker.random.words(2),
  completed: faker.random.boolean(),
});

const repeat = (elementFactory, number) => {
  const array = [];
  for (let i = 0; i < number; i += 1) {
    array.push(elementFactory());
  }
  return array;
};

export default () => {
  const howMany = faker.random.number(10);

  return repeat(createElement, howMany);
};
