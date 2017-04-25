import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../services/hero.service'

@Component({
	selector: 'app-my-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[]

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(items => this.heroes = items.slice(1, 5))
	}
}
