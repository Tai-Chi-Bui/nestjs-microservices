import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, username: 'john', password: 'changeme' },
    { id: 2, username: 'chris', password: 'secret' },
    { id: 3, username: 'maria', password: 'guess' },
  ];

  async findOne(username: string) {
    return this.users.find(user => user.username === username);
  }
}
