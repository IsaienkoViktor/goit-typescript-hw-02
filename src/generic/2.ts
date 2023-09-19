/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObj = {
  name: "Top",
  position: 1,
  color: "red",
  weight: 100,
};

const bottomObj = {
  name: "Bottom",
  position: 2,
  color: "blue",
  weight: 50,
};

const result = compare(topObj, bottomObj);
console.log(result);

export { compare };
