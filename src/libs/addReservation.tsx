export default async function addReservation (token: string, mid: string, date: string) {

    const response = await fetch(`http://localhost:5050/api/v1/massageShops/${mid}/reservations`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
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