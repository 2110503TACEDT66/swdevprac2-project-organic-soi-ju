export default async function deleteReservation(token: string, rid: string) {
    
    const response = await fetch(`http://localhost:5050/api/v1/reservations/${rid}`, {
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