import { User } from '../../user/user.entity';

export default class TestUtil {
  static giveMeAValidUser(): User {
    const user = new User();
    user.name = 'Test User';
    user.email = 'user@teste.com';
    user.id = '1';
    return user;
  }
}
