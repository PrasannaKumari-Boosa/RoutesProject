import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';

export const routes: Routes = [
    {
        path:'home', component:HomeComponent
    },
    {
        path:'about', component:AboutComponent
    },
    {
        path:'courses',
        component:CoursesComponent,
        children: [
            {path:"", component:CoursesCardComponent },
            {path:':id', component: CourseCategoriesComponent},
            {path:'',outlet:'sidemenu',component:SidemenuComponent},
            {path:':id',outlet:'sidemenu',component:SidemenuComponent}
        ]
    },
    {
        path:'',redirectTo:'/home',pathMatch:'full'
    },
    {
        path:'**',redirectTo:'/home',pathMatch:'full'
    }
];
