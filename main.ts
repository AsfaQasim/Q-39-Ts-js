function city_country(city: string, country: string): string {
    return `${city} , ${country}`

}
let c1 = city_country(`Lahore`,`Pakistan`);
let c2 =city_country(`Tokyo`,`Japan`);
let c3 =city_country(`Paris`,`France`);

console.log(c1);
console.log(c2);
console.log(c3);