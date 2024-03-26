export default async function userRegister(userName: string, userEmail: string, userPassword: string, userTel: string){
    
    const response = await fetch('https://presentation-day-1-organic-soi-ju-omega.vercel.app/api/v1/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
            password: userPassword,
            role: "user",
            tel: userTel
        })
    });
    
    if(!response.ok) {
        throw new Error('Can\'t Register');
    }

    
    return await response.json();
}