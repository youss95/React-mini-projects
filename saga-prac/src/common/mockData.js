const friends = [
  { name: "h", age: 12 },
  { name: "h", age: 13 },
  { name: "h", age: 14 },
  { name: "h", age: 15 },
];

const timelines = [
  { desc: "goods", likes: 0 },
  { desc: "goods", likes: 10 },
  { desc: "goods", likes: 20 },
  { desc: "goods", likes: 30 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
