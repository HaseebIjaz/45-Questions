// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function functionCaller(callback : (a:string,b?:string) => void , argsList: readonly ([string,string] | [string]) [] ): void{
    argsList.forEach((arg: [string,string] | [string]) => {
        const [a,b] = arg;
        callback(a,b);
    });
}

function describe_city(city:string, country:string = "Pakistan"):void {
    console.log(`${city} is in ${country}`);
}

const describeCityArgs: readonly ([string,string] | [string]) [] = [["lahore"], ["kasur"], ["penang","malaysia"]];

functionCaller(describe_city,describeCityArgs);