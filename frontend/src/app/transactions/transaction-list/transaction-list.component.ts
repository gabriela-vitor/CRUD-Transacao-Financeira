import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';  // Importa o Router para navegação entre rotas
import { TransactionService } from '../../services/transaction.service';  // Importa o serviço de transações
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-list',  // Define o seletor do componente
  standalone: true,  // Componente independente
  imports: [RouterOutlet, CommonModule],
  templateUrl: './transaction-list.component.html',  // Caminho para o template HTML
  styleUrls: ['./transaction-list.component.css']  // Caminho para o estilo CSS
})
export class TransactionListComponent implements OnInit {
  transactions: any[] = [];  // Array que irá armazenar as transações obtidas do backend

  // O construtor injeta o serviço de transação e o roteador para navegação
  constructor(private transactionService: TransactionService, private router: Router) {}

  // Método que é executado assim que o componente é inicializado
  ngOnInit(): void {
    this.getTransactions();  // Chama o método para obter as transações ao iniciar o componente
  }

  // Método para obter todas as transações do backend
  getTransactions(): void {
    // Chama o serviço de transações e obtém os dados via subscribe
    this.transactionService.getTransactions().subscribe((data: any) => {
      this.transactions = data;  // Armazena as transações no array local
    });
  }

  // Método para editar uma transação
  editTransaction(id: number): void {
    // Exibe o ID da transação no console (útil para debug)
    console.log(`Editando transação com ID: ${id}`);
    // Navega para a página de edição, passando o ID da transação como parâmetro
    this.router.navigate(['/edit-transaction', id]);
  }

  // Método para deletar uma transação
  deleteTransaction(id: number): void {
    // Chama o serviço de transações para deletar uma transação por ID
    this.transactionService.deleteTransaction(id).subscribe(() => {
      // Remove a transação deletada da lista local de transações
      this.transactions = this.transactions.filter(transaction => transaction.id !== id);
    });
  }
}
