export interface RegisterData{
    country: string;
    countryCode: string;
    passportNumber: string;
    email: string;
    cardType: string;
    cardNumber: string;
    monthYear: string;
    cvv: string;
    cardCountry: string;
    zipCode: string;
    ticketNumber: string;
    flightNumber: string;
    takeOffFrom: string;
    takeOffTime: string;
    landingTo: string;
    landingTime: string;
}

export interface TaskData{
    date: string;
    time: string;
    userId: string;
    taskId: string;
    categoryId: string;
    photo: string[];
}