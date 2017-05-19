import { Component, OnInit } from '@angular/core';
import { TankService } from './tank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})

export class TanksComponent implements OnInit {

  tanks:Array<Object>;

  constructor(
    private tankService:TankService,
    private router: Router
  ) { 
  }

  ngOnInit() {
   this.tanks = [];
   this.getTanks();
   console.log('tanks',this.tanks);
}

getTanks()
{
  this.tankService.getTanks().then((resp)=>{
    this.tanks = resp;
  });
}

goToCreate()
{
  console.log('go to create...;');
  this.router.navigate(['tank-create']);
}
}