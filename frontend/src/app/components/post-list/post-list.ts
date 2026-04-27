import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../services/post';
import { Post } from '../post/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [Post],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  private postService = inject(PostService);
  posts = signal<any[]>([]);

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => this.posts.set(data as any[]),
      error: (err) => console.error(err)
    });
  }
}
