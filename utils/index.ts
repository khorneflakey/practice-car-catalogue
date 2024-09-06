export async function fetchCars() {
    const headers = {
            'x-rapidapi-key': 'b814d70cb9mshc5a275d04b70656p1475e8jsn3b6cd527b216',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }


    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers,});

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}
