import { Component } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';  // Importa o Router para navegação entre rotas
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-transaction-form',  // Define o seletor do componente
  standalone: true,  // O componente é standalone (não depende de um módulo pai)
  templateUrl: './transaction-form.component.html',  // Caminho para o template HTML
  styleUrls: ['./transaction-form.component.css'],  // Caminho para o estilo CSS
  imports: [CommonModule, RouterModule, FormsModule]
})
export class TransactionFormComponent{
  // Definindo as variáveis do formulário
  description: string = '';  // Descrição da transação
  amount: number | null = null;  // Valor da transação
  category: string = '';  // Categoria da transação
  type_id: number | null = null;  // Tipo da transação (exemplo: despesas ou receita)

  transactionTypes = [
  { id: 1, name: 'Receita' },
  { id: 2, name: 'Despesa' },
  { id: 3, name: 'Salário' },
  { id: 4, name: 'Venda' },
  { id: 5, name: 'Investimento' },
  { id: 6, name: 'Aluguel' },
  { id: 7, name: 'Serviços' },
  { id: 8, name: 'Compras' },
  { id: 9, name: 'Transporte' },
  { id: 10, name: 'Entretenimento' },
  { id: 11, name: 'Educação' },
  { id: 12, name: 'Saúde' },
  { id: 13, name: 'Viagem' },
  { id: 14, name: 'Impostos' }
  ];

  constructor(private transactionService: TransactionService) {}  // Injeção do serviço TransactionService

  // Função para adicionar uma nova transação
  addTransaction() {
    // Criação de um objeto de transação baseado nos valores do formulário
    const transaction = {
      description: this.description,  // Atribui a descrição do formulário ao objeto
      amount: this.amount,  // Atribui o valor ao objeto
      category: this.category,  // Atribui a categoria ao objeto
      type_id: this.type_id  // Atribui o tipo da transação
    };

    // Envia a transação através do serviço
    this.transactionService.addTransaction(transaction).subscribe(() => {
      // Sucesso ao adicionar a transação
      console.log('Transação adicionada com sucesso!');
      
      // Reseta o formulário após o sucesso
      this.description = '';  // Limpa a descrição
      this.amount = 0;  // Reseta o valor
      this.category = '';  // Limpa a categoria
      this.type_id = null;  // Reseta o tipo de transação
    },
    error => {
      // Lida com o erro caso a transação falhe
      console.error('Erro ao adicionar transação:', error);
    });
  }
}
