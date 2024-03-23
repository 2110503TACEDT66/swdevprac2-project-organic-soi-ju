export interface BookingItem {
    name: string,
    surname: string,
    id: string,
    hospital: string,
    bookDate: string
  }
    
export interface ShopItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
}
    
export interface ShopJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: ShopItem[]
}