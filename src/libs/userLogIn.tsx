export default async function userLogIn(userEmail: string, userPassword: string) {

    const response = await fetch('https://presentation-day-1-organic-soi-ju-omega.vercel.app/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword
        })
    });
    
    if(!response.ok) {
        throw new Error('Can\'t Login');
    }

    
    return await response.json();
}