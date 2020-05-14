<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
=======
=======
>>>>>>> Stashed changes
import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';
import { mimeType } from "./mime-type.validator";
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
<<<<<<< Updated upstream
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

<<<<<<< Updated upstream
  constructor(public postsService: PostsService){}
=======

=======
>>>>>>> Stashed changes
export class PostCreateComponent implements OnInit, OnDestroy {
  enteredTitle = '';
  enteredContent = '';
  post: Post;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = 'create';
  private postId: string;
  private authStatusSub: Subscription;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(){
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      'content': new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    });
    this.route.paramMap.subscribe((paramMap) => {
      if(paramMap.has('postId')){
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {
            id: postData._id,
            title: postData.title,
            content: postData.content,
            imagePath: postData.imagePath,
            creator: postData.creator
          };
          this.form.setValue({
            title: this.post.title,
            content: this.post.content,
            image: this.post.imagePath
          });
        });
      }else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }
>>>>>>> Stashed changes

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
}
