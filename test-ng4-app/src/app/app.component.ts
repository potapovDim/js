import { Component, OnInit } from '@angular/core';
import { State } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  stateChange = {
    mark: '',
    volume: '',
    price: ''
  };

  store: any = State.stern_machines;

  initFilter() {
    const { mark, volume, price } = this.stateChange;
    if (!!mark) {
      this.store = State.stern_machines.filter(machine => machine.brand.includes(mark));
    } else if (!!volume) {
      this.store = State.stern_machines.filter(machine => machine.work_volume < +volume);
    } else if (!!price) {
      this.store = State.stern_machines.filter(machine => machine.price < +price);
    } else if (!price && !volume && !mark) {
      this.store = State.stern_machines;
    }
  }

  onChange(target) {
    return (event) => {
      this.stateChange[target] = event.target.value;
    };
  }

  ngOnInit() {
    console.log('init');
  }
}
