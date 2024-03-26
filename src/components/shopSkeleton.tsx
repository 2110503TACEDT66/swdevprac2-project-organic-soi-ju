import { Avatar, Skeleton } from "@mui/material"
export default function ShopSkeleton() {
    return (
        <div className="flex flex-row flex-wrap w-full items-center justify-center mt-5">
            {
                Array.from({length: 8}).map((_, index) => {
                    return(
                        <div className="w-[75%] lg:w-[18%] h-[50vh] m-5 bg-jason relative">
                        <Skeleton animation="wave" variant="rounded"  height={250} />
                        <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} style={{ marginTop: 10 , width: '70%', marginLeft:'7%'}} />
                        <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} style={{ marginTop: 10 , width: '50%', marginLeft:'7%'}} />
                        <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} style={{ marginTop: 10 , width: '60%', marginLeft:'7%'}} />
                        <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} style={{ marginTop: 10 , width: '70%', marginLeft:'7%'}} />
                        <Skeleton animation="wave" variant="rounded"  height={32} style={{
                            width: '23%',
                            position: 'absolute',
                            bottom: '3%',
                            right: '5%',
                        }}/>
                            
                        
                        </div>



                    )
                })
            }
        </div>
    )
}