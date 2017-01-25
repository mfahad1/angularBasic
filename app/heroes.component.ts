import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';



@Component({
	moduleId : module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',

 	styleUrls: ['./heroes.component.css'],
	providers: [HeroService]
})
export class HeroesComponent implements OnInit {
   heroes :Hero[];
   selectedHero:Hero;

    ngOnInit(): void {
	    this.getHeroes();
	}

	constructor(private heroService: HeroService,private router: Router) {

	 }

	getHeroes(): void {
	    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

  title = 'Tour of Heroes';
  hero: Hero = {
	  id: 1,
	  name: 'Windstormer'
   };

   

   onSelect(hero:Hero):void{
   	console.log(hero);
   	this.selectedHero = hero;
   }

   gotoDetail():void{

   		 this.router.navigate(['/detail', this.selectedHero.id]);
   }


}
