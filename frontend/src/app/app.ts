import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { PostList } from './components/post-list/post-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Navbar, PostList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
