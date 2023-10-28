const users: User[] = [
    { id: 1, email: 'user1@sep.com', password: 'password1', role: 'CS' },
    { id: 2, email: 'user2@sep.com', password: 'password2', role: 'SCS' },
    { id: 3, email: 'user3@sep.com', password: 'password3', role: 'FM' },
    { id: 4, email: 'user4@sep.com', password: 'password4', role: 'AM' },
    { id: 5, email: 'user5@sep.com', password: 'password5', role: 'PM' },
    { id: 6, email: 'user6@sep.com', password: 'password6', role: 'SM' },
    { id: 7, email: 'user7@sep.com', password: 'password7', role: 'ST' },
  ];
  
  export function authenticateUser(email: string, password: string): boolean {
    const user = users.find((u) => u.email === email && u.password === password);
    return Boolean(user)
  }

  export function getRoleByEmail(email: string): string {
    const user = users.find((u) => u.email === email);
    return user ? user.role : '';
  }