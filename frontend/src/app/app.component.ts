import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa o módulo de roteamento
import { TransactionFormComponent } from './transactions/transaction-form/transaction-form/transaction-form.component';  // Importa o componente de formulário de transação
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';  // Importa o componente de lista de transação


@Component({
  selector: 'app-root',  // Define o seletor do componente raiz
  templateUrl: './app.component.html',  // Define o caminho para o template HTML
  styleUrls: ['./app.component.css'],  // Corrigido: Define o caminho para o arquivo de estilos (no plural)
  standalone: true,  // Declara que o componente é autônomo
  imports: [TransactionFormComponent, TransactionListComponent, RouterModule]  // Importa os componentes e o roteamento
})
export class AppComponent {
  title = 'frontend';  // Título do aplicativo
}


