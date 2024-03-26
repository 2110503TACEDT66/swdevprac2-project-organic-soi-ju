
export default async function getReservations(token: string) {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations`, {
        next: {
            tags: ['reservations'],
        },
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if(!response.ok) {
        throw new Error('Failed to fetch reservations');
    }

    return await response.json();
}
