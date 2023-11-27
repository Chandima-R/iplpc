import {RegisterData} from "@/components/types";

export const REGISTER_INITIAL_DATA: RegisterData = {
    country: '',
    countryCode: '',
    passportNumber: '',
    email: '',
    cardType: '',
    cardNumber: '',
    monthYear: '',
    cvv: '',
    cardCountry: '',
    zipCode: '',
    ticketNumber: '',
    flightNumber: '',
    takeOffFrom: '',
    takeOffTime: '',
    landingTo: '',
    landingTime: ''
}

export const TASK_INITIAL_DATA = {
    date: '',
    time: '',
    userId: '',
    taskId: '',
    categoryId: '',
    photo: []
}