export default async function getShop (id: string) {

    const response = await fetch(`https://presentation-day-1-organic-soi-ju-omega.vercel.app/api/v1/massageShops/${id}`, {
        method: 'GET'
    });

    if(!response.ok) {
        throw new Error('Cannot GET shop');
    }
    return await response.json();
}