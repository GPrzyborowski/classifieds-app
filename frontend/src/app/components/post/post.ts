import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  @Input() title?: string
  @Input() price?: number
}
