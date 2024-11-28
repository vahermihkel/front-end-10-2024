export const build = (key, event, object) => {
  let inputValue = event.target.value;
  if (event.target.type === "number") {
    inputValue = Number(event.target.value);
  }

  if (key.includes(".")) {
    const [parentKey, childKey] = key.split(".");
    object[parentKey] = {
        ...object[parentKey],
        [childKey]: inputValue
    };
  } else {
    object[key] = inputValue;
  }
  return object;
}