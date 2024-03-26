export default async function deleteReservation(token: string, rid: string) {
    
    const response = await fetch(`https://presentation-day-1-organic-soi-ju-omega.vercel.app/api/v1/reservations/${rid}`, {
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