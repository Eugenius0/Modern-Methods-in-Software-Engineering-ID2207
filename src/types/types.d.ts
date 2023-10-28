type User = {
    id: number;
    email: string;
    password: string;
    role: string;
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