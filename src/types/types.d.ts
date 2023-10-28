type User = {
    id: number,
    email: string,
    password: string,
    role: string,
  };

  type EventRequest = {
    id: number,
    clientName: string,
    eventType: string,
    status: string,
    startDate: string,
    endDate: string,
    expectedAttendees: number,
    preferences: string[],
    expectedBudget: number,
  }

  type Client = {
    clientName: string,
    clientMail: string,
  }

  type Task = {
    id: number,
    referenceID: number,
    subTeam: string,
    title: string,
    description: string,
    assignedTo: string,
    priority: string,
    status: string,
    comment: string,
  }

