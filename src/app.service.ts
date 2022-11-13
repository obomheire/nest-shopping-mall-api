import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {status: string, message: string} {
    return { status: "running", message: "Hello from Shopping Mall API"};
  }
}
