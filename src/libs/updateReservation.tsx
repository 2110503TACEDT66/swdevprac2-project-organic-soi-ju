export default async function updateReservation(token: string, rid: string, date: Date) {
    
    const response = await fetch(`http://localhost:5050/api/v1/reservations/${rid}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            reserveDate: date
        })
    });

    if(!response.ok) {
        alert(response.statusText);
    }
    return await response.json();
}