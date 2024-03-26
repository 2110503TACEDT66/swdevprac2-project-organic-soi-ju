

export default async function getReservation(token: string, rid: string) {

    const response = await fetch(
        `${process.env.BACKEND_URL}/api/v1/reservations/${rid}`,
         {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if(!response.ok) {
        throw new Error('Failed to fetch reservation with id: ' + rid);
    }

    return await response.json();
}
