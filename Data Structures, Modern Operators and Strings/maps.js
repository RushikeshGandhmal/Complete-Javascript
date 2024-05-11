// In Maps, key can be of any type
const map = new Map();

// 1. set(key, value) - Adds or updates an element with a specified key and value. If the key already exists, the value is updated. It returns the updated map.
map.set("key", "value");

// 2. get(key) - Returns the value associated with the specified key, or undefined if the key does not exist in the map.
const value = map.get("key");

// 3.has(key) - Returns a boolean indicating whether an element with the specified key exists.
const exists = map.has("key");

// 4.delete(key) - Removes the element associated with the specified key. Returns true if the element existed and has been removed, or false if the element does not exist.
map.delete("key");

// 5.clear() - Removes all elements from the map.
map.clear();

// 6.size - Returns the number of elements in the map.
const size = map.size;

// for...of uses entries() by default, you can also explicitly use entries() if you want
for (const [key, value] of map) {
  console.log(key, value);
}

for (const key of map.keys()) {
  console.log(key);
}

for (const value of map.values()) {
  console.log(value);
}
