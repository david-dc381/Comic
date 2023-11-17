import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnemigosService, Enemigo } from 'src/app/services/enemigos.service';


@Component({
  selector: 'app-enemigos',
  templateUrl: './enemigos.component.html',
  styleUrls: ['./enemigos.component.css']
})
export class EnemigosComponent implements OnInit {

  enemigos: any[] = [];

  constructor(private _enemigosService: EnemigosService,
              private router: Router) { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.enemigos = this._enemigosService.getEnemigos();
    console.log(this.enemigos);
    
  }

  verEnemigo(idx: number): void{
    console.log(idx);    
    this.router.navigate(['/enemigo', idx])
  }

}
