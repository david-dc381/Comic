import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnemigosService } from 'src/app/services/enemigos.service';

@Component({
  selector: 'app-enemigo',
  templateUrl: './enemigo.component.html',
  styleUrls: ['./enemigo.component.css']
})
export class EnemigoComponent implements OnInit {

  enemigo: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _enemigosServicio: EnemigosService) { 
    this.activatedRoute.params.subscribe(params=> {
      console.log(params);
      console.log(params['id']);

      this.enemigo = this._enemigosServicio.getEnemigo(params['id']);
      console.log(this.enemigo);
      
    });
  }

  ngOnInit(): void {
  }

}
