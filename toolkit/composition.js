/* Composition */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const barker = (state) => ({
  bark: () => console.warn(`Woof! I am ${state.name}!`),
});

const driver = (state) => ({
  drive: () => state.position + state.speed, // state.position += state.speed
});

const killer = (state) => ({
  kill: () => state.kill,
});

barker({ name: 'Fido' }).bark();

const murderRobotDog = (name) => {
  const state = {
    name,
    speed: 100,
    position: 0,
  };
  return {

    ...barker(state),
    ...driver(state),
    ...killer(state),
  };
};

murderRobotDog('fido').bark();
