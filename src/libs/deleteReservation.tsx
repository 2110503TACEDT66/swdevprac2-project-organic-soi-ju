export default async function deleteReservation(token: string, rid: string) {
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations/${rid}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if(!response.ok) {
        alert(response.statusText);
    }
    return await response.json();
}