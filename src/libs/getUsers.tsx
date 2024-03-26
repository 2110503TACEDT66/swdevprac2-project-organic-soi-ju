export default async function getUsers(token: string) {

    const response = await fetch('https://presentation-day-1-organic-soi-ju-omega.vercel.app/api/v1/auth/users', {
        next: {
            tags: ['users'],
        },
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if(!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return await response.json();
}