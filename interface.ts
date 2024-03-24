export interface ReservationItem {
    id: string,
    user: string,
    massage_shop: string,
    reserveDate: string
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
    open_time: string,
    close_time: string
    __v: number,
    id: string
}
    
export interface ShopJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: ShopItem[]
}