export default async function getUserProfile(token: string) {

    const response = await fetch('http://localhost:5050/api/v1/auth/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    if(!response.ok) {
        throw new Error('Failed to fetch user profile')
    }

    return await response.json();
}
