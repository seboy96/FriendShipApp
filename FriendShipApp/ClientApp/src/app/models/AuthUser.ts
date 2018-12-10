import { User } from "../login/login.component";


export interface AuthUser {
  tokenString: string;
  user: User;
}
