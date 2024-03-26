export default async function getUserProfile(token: string) {

    const response = await fetch('https://presentation-day-1-organic-soi-ju-omega.vercel.app/api/v1/auth/me', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    if(!response.ok) {
        throw new Error('Failed to fetch user profile')
    }

    return await response.json();
}
