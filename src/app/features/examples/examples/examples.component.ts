import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'roleame-webapp-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'roleame-webapp.examples.menu.todos' },
    { link: 'stock-market', label: 'roleame-webapp.examples.menu.stocks' },
    { link: 'theming', label: 'roleame-webapp.examples.menu.theming' },
    { link: 'crud', label: 'roleame-webapp.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'roleame-webapp.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'roleame-webapp.examples.menu.form' },
    { link: 'notifications', label: 'roleame-webapp.examples.menu.notifications' },
    { link: 'authenticated', label: 'roleame-webapp.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
