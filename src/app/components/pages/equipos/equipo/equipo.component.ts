import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquiposService } from '../../../../services/equipos.service';
import { Equipo } from '../../../../models/equipo.interface';
import { MaterialModule } from '../../../../modules/material/material.module';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo: Equipo | undefined;

  constructor(
    private equipoService: EquiposService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const equipoId = +params['id'];

      if (equipoId) {
        this.getEquipo(equipoId);
      }
    });
  }

  getEquipo(id: number): void {
    this.equipoService.getEquipoById(id).subscribe((equipo: Equipo | undefined) => {
      this.equipo = equipo;
      console.log(this.equipo);
    });
  }

  volver() {
    window.history.back();
  }

}
