import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostService {
  private url = 'http://localhost:5187';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.url}/`);
  }

  addPost(post: any) {
    return this.http.post(`${this.url}/add`, post);
  }
}