const users: User[] = [
    { id: 1, email: 'user1@sep.com', password: 'password1', role: 'user' },
    { id: 2, email: 'user2@sep.com', password: 'password2', role: 'user' },
  ];
  
  export function authenticateUser(email: string, password: string): boolean {
    const user = users.find((u) => u.email === email && u.password === password);
    return Boolean(user)
  }
  
  export function authorizeUser(user: User | null, requiredRole: string): boolean {
    return !!user && user.role === requiredRole;
  }