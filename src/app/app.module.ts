import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorHandler, NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from './courses.service';
import {AuthorsComponent} from './authors/authors.component';
import {AuthorsService} from './authors.service';
import {SummaryPipe} from './summary.pipe';
import {FavoriteComponent} from './favorite/favorite.component';
import {TitleCasePipe} from './title-case.pipe';
import {PanelComponent} from './panel/panel.component';
import {LikeComponent} from './like/like.component';
import {InputFormatDirective} from './input-format.directive';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {NewCourseFormComponent} from './new-course-form/new-course-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {CourseTopicComponent} from './course-topic/course-topic.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {HttpModule} from '@angular/http';
import {PostsComponent} from './posts/posts.component';
import {PostService} from './services/post/post.service';
import {AppErrorHandler} from './common/errors/app-error-handler';
import {GithubFollowersComponent} from './github-followers/github-followers.component';
import {GithubFollowersService} from "./services/github-followers/github-followers.service";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {GithubProfileComponent} from "./github-profile/github-profile.component";
import {NotFoundComponent} from "./not-found/not-found.component";


@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        CourseComponent,
        AuthorsComponent,
        SummaryPipe,
        FavoriteComponent,
        TitleCasePipe,
        PanelComponent,
        LikeComponent,
        InputFormatDirective,
        ZippyComponent,
        ContactFormComponent,
        NewCourseFormComponent,
        SignupFormComponent,
        CourseTopicComponent,
        ChangePasswordComponent,
        PostsComponent,
        GithubFollowersComponent,
        GithubProfileComponent,
        NavbarComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'followers/:userId',
                component: GithubProfileComponent
            },
            {
                path: 'followers',
                component: GithubFollowersComponent
            },
            {
                path: 'posts',
                component: PostsComponent
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ])
    ],
    providers: [
        CoursesService,
        AuthorsService,
        PostService,
        GithubFollowersService,
        //means "Instead of ErrorHandler use class AppErrorHandler"
        {provide: ErrorHandler, useClass: AppErrorHandler}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
