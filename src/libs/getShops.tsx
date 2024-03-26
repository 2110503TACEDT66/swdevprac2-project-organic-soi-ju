export default async function getShops () {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await fetch('http://localhost:5050/api/v1/massageShops', {
        method: 'GET'
    });

    if(!response.ok) {
        throw new Error('Cannot GET shops');
    }
    return await response.json();
}