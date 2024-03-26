export default async function addReservation (token: string, mid: string, date: Date) {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/massageShops/${mid}/reservations`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            reserveDate: date
        })
    });

    if(!response.ok) {
        // console.log("Failed to add reservation");
        // throw new Error('Failed to add reservation');
        alert("Failed to add reservation"); // client side error handling or it wouldnt work.
        
    }

    return await response.json();
}