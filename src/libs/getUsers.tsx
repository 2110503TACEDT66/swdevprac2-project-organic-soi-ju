export default async function getReservations(token: string) {

    const response = await fetch('http://localhost:5050/api/users', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if(!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return await response.json();
}