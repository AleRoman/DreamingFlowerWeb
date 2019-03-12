import { Rol } from './rol';

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    rol?: Rol;
 }
