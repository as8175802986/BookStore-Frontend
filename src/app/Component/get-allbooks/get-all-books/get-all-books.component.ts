import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/httpservice/userservise/user.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
 
   constructor(private service:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

}
