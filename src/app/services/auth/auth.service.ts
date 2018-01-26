import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AuthService {
    constructor(private http: Http) {
    }

    login(credentials) {
        return this.http
            .post('/api/authenticate', JSON.stringify(credentials))
            .map(
                response => {
                    let result = response.json();
                    console.log(result);
                    if (result && result.token) {
                        localStorage.setItem('token', result.token);
                        return true;
                    } else {
                        return false;
                    }
                }
            );
    }

    logout() {
    }

    isLoggedIn() {
        return false;
    }
}

