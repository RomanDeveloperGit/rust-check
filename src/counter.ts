import init, { add } from './my_wasm_project/pkg/my_wasm_project';

export async function setupCounter(element: HTMLButtonElement) {
  await init();

  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  setCounter(0);

  element.addEventListener('click', () => {
    setCounter(add(counter, 1));
  });
}
