import { Component } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
	constructor(private authservice: AuthService, private router: Router) {}

	logoType = 'full';

	spotifyLogin(): void {
		this.authservice.spotifyImplicitGrantLogin();
	}

	redirectoToHome(): void {
		this.router.navigate(['/home']);
	}

	ngOnInit(): void {
		this.authservice.isAuthorized().subscribe((isAuthorized) => {
			if (isAuthorized) {
				this.redirectoToHome();
			} else {
				this.authservice.handleImplicitGrantError();
				this.authservice.handleImplicitGrantSuccess();
			}
		});
	}
}
