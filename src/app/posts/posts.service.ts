import {Post} from './post.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { HttpClient } from "@angular/common/http";
<<<<<<< HEAD
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
=======
<<<<<<< Updated upstream
=======
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + "/posts/";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a

@Injectable({providedIn: 'root'})
export class PostsService{
  private posts: Post[] = [];
  private postsUpdated = new Subject<{posts: Post [], postCount: number}>();

  constructor(private http: HttpClient, private router: Router) {}

<<<<<<< HEAD
    getPosts(postsPerPage: number, currentPage: number){
      const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
      this.http.get<{message: string; posts: any, maxPosts: number}>('http://localhost:3000/api/posts' + queryParams)
=======
<<<<<<< Updated upstream
    getPosts(){
      this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
=======
    getPosts(postsPerPage: number, currentPage: number){
      const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
      this.http.get<{message: string; posts: any, maxPosts: number}>(BACKEND_URL + queryParams)
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
      .pipe(
        map(postData =>{
        return {posts: postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id,
            imagePath: post.imagePath,
            creator: post.creator
          };
        }), maxPosts: postData.maxPosts
      };
      }))
      .subscribe((transformedPostData) => {
        console.log(transformedPostData);
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({posts: [...this.posts],postCount: transformedPostData.maxPosts});
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
      });
    }

    getPostUpdatedListener(){
      return this.postsUpdated.asObservable();
    }

<<<<<<< HEAD
    getPost(id: string) {
      return this.http.get<{_id: string; title: string; content: string; imagePath: string; creator: string;}>("http://localhost:3000/api/posts/" + id);
    }

    addPost(title: string, content: string, image: File){
      const postData = new FormData();
      postData.append("title", title);
      postData.append("content", content);
      postData.append("image", image, title);
      this.http
        .post<{message: string, post: Post }>(
          'http://localhost:3000/api/posts',
          postData)
        .subscribe(responseData => {
          this.router.navigate(["/"]);
      });
=======
<<<<<<< Updated upstream
    addPost(title: string, content: string){
      const post: Post = {id: null, title: title, content: content};
      this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
=======
    getPost(id: string) {
      return this.http.get<{_id: string; title: string; content: string; imagePath: string; creator: string;}>(BACKEND_URL + id);
    }

    addPost(title: string, content: string, image: File){
      const postData = new FormData();
      postData.append("title", title);
      postData.append("content", content);
      postData.append("image", image, title);
      this.http
        .post<{message: string, post: Post }>(
          BACKEND_URL,
          postData)
        .subscribe(responseData => {
          this.router.navigate(["/"]);
      });
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
    }

    updatePost(id: string, title: string, content: string, image: File | string){
      let postData: Post | FormData;
      if(typeof(image) === 'object'){
        postData = new FormData();
        postData.append("id", id);
        postData.append("title", title);
        postData.append("content", content);
        postData.append("image", image, title);
      } else {
        postData = {
          id: id,
          title: title,
          content: content,
          imagePath: image,
          creator: null
        };
      }
<<<<<<< HEAD
      this.http.put("http://localhost:3000/api/posts/" + id, postData)
=======
      this.http.put(BACKEND_URL + id, postData)
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
    }

    deletePost(postId: string){
<<<<<<< HEAD
      return this.http.delete("http://localhost:3000/api/posts/" + postId);
=======
      return this.http.delete(BACKEND_URL + postId);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
    }

}
