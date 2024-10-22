import { Component } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  description: string = '';
  amount: number | null = null;
  category: string = '';
  type_id: number | null = null;

  constructor(private transactionService: TransactionService) {}

  addTransaction() {
    const transaction = {
      description: this.description,
      amount: this.amount,
      category: this.category,
      type_id: this.type_id
    };

    this.transactionService.addTransaction(transaction).subscribe(() => {
      ) => {
        console.log('Transação adicionada com sucesso!');
        
        this.transaction = { description: '', amount: 0, category: '' };
      },
      error => {
        
        console.error('Erro ao adicionar transação:', error);
    });
  }
}
