type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
}


function compare<T extends AllType>(top: T, bottom: T): Pick<T, keyof AllType> {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }