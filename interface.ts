export interface ReservationJson {
    success: boolean,
    count: number,
    data: ReservationItem[]
}


export interface ReservationItem {
    _id: string,
    user: UserItem,
    massage_shop: ShopItem,
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

export interface UserItem {
    _id: string,
    name: string,
    email: string,
    password: string,
    tel: string,
    role: string,
    __v: number,
    id: string
}
