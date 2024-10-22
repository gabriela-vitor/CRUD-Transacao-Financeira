import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe((data: any) => {
      this.transactions = data;
    });

  editTransaction(id: number): void {
    console.log(`Editando transação com ID: ${id}`);
    this.router.navigate(['/edit-transaction', id])
}

  deleteTransaction(id: number): void {
    this: this.transactionService.deleteTransaction(id).subscribe(() => {
      this.transactions = this.transactions.filter(transaction => transaction.id !== id);
      })
    }
  }
}
function deleteTransaction(id: any, number: any) {
  throw new Error('Function not implemented.');
}

