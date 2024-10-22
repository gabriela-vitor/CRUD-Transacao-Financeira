import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransactionFormComponent } from './transactions/transaction-form/transaction-form/transaction-form.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [TransactionFormComponent, TransactionListComponent, RouterModule]
})
export class AppComponent {
  title = 'frontend';
}
