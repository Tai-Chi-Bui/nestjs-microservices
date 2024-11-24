import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = []; // Replace with actual database logic

  async findOne(username: string): Promise<{ username: string; password: string } | null> {
    const foundUser = this.users.find(user => user.username === username);
  
    // Return an object containing only the username and password, or null if not found
    return foundUser ? { username: foundUser.username, password: foundUser.password } : null;
  }
  

  async create(user: { username: string; password: string }) {
    const newUser = { id: this.users.length + 1, ...user };
    this.users.push({...newUser});
    delete newUser.password
    return newUser;
  }
}
