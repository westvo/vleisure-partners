﻿
/* tslint:disable */
declare namespace ProxyModel{
    
    export interface HotelDetailsRequest extends GenericRequest {
        
        arrivalDate: string;
        departureDate: string;
        languageCode: string;
        hotelId: number;
        roomGuests: RoomGuestRequestModel[];
        }
    
}