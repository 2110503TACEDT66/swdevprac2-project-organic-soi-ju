export default async function getShops () {

    const response = await fetch('http://localhost:5050/api/v1/massageShops', {
        method: 'GET'
    });

    if(!response.ok) {
        throw new Error('Cannot GET shops');
    }
    return await response.json();
}