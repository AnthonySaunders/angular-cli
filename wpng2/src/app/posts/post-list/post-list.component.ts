import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

import { User } from '../../users/user';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService, UsersService]
})
export class PostListComponent implements OnInit {

	posts: Post[];
	users: User[];

  constructor(private postsService: PostsService, private usersService: UsersService) { }

	getPosts(){
		this.postsService
			.getPosts()
			.subscribe(res => {
				this.posts = res;
			});
	}
  
    getUsers(){
		this.usersService
			.getUsers()
			.subscribe(res => {
				this.users = res;
			});
	}
	
	getUsername(id: number){
		for(var user of this.users){
			if(id == user['id']){
				return user['name'];
			}
		}
		return false;
	}
  
	ngOnInit() {
		this.getPosts();
		this.getUsers();
	}
}
