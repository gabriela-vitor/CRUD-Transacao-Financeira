import { Routes } from '@angular/router';
import { TransactionFormComponent } from './transactions/transaction-form/transaction-form/transaction-form.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/transactions', pathMatch: 'full' },  // Redireciona o caminho vazio para a lista de transações
  { path: 'transactions', component: TransactionListComponent },  // Rota para a lista de transações
  { path: 'add-transaction', component: TransactionFormComponent },  // Rota para adicionar uma nova transação
  { path: 'edit-transaction/:id', component: TransactionFormComponent }  // Rota para editar uma transação, passando o ID
];

