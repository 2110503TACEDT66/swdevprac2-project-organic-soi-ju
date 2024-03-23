export default async function getShop (id: string) {

    const response = await fetch(`http://localhost:5050/api/v1/massageShops/${id}`, {
        method: 'GET'
    });

    if(!response.ok) {
        throw new Error('Cannot GET shop');
    }
    return await response.json();
}