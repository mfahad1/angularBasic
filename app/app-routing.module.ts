import { NgModule }      from '@angular/core';
import { RouterModule ,Routes  }   from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { CustomHero }     from './customHero.component';

const routes : Routes = [
	{ path: 'heroes', component: HeroesComponent        },
	{ path: 'customHeroes', component: CustomHero       },
	{ path: 'dashboard', component: DashboardComponent  },
	{ path:"",redirectTo: '/dashboard',pathMatch: 'full'},
	{ path:'detail/:id',component : HeroDetailComponent }
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}