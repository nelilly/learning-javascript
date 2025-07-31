/* a vanilla JS implementation of the React useState hook */
export function useState(initialState, component, id) {
  /* Define a unique property name for each state variable */
  const propName = `state-${id}`;

  component[propName] = component[propName] ?? initialState;

  const setState = (newState) => {
  const currentValue = component[propName];
  const newValue = typeof newState === 'function' ? newState(currentValue) : newState;

    component[propName] = newValue;
    component.requestUpdate();
  };

  return [() => component[propName], setState];
}
