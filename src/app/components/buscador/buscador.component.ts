import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnemigosService } from 'src/app/services/enemigos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  enemigos: any[] = [];
  termino!: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private enemigosServicio: EnemigosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.termino = params['termino'];

      this.enemigos = this.enemigosServicio.buscarEnemigos(params['termino']);

      console.log(this.enemigos);
    });
  }

  verEnemigo (idx: number){
    console.log(idx);
    this.router.navigate(['/enemigo', idx])
    
  }

}
