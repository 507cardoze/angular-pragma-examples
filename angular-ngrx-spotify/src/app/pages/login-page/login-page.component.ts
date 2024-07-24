import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
	constructor(private authservice: AuthService, private router: Router) {
		this.authservice
			.isAuthorized()
			.subscribe((isAuthorized) => (this.$isAuthorized = isAuthorized));
	}

	logoType = 'full';
	$isAuthorized: boolean = false;

	spotifyLogin(): void {
		this.authservice.spotifyImplicitGrantLogin();
	}

	redirectoToHome(): void {
		this.router.navigate(['/home']);
	}

	ngOnInit(): void {
		if (this.$isAuthorized) this.redirectoToHome();
		this.authservice.handleImplicitGrantError();
		this.authservice.handleImplicitGrantSuccess();
	}
}
