
export default async function getReservations(token: string) {

    const response = await fetch('http://localhost:5050/api/v1/reservations', {
        next: {
            tags: ['reservations'],
        },
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
        next: {
            tags: ['res']
        }
    });

    if(!response.ok) {
        throw new Error('Failed to fetch reservations');
    }

    return await response.json();
}
