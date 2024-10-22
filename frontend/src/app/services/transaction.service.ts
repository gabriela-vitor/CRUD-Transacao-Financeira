import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


/**
 * Serviço responsável por gerenciar as transações.
 * Realiza operações de leitura, criação, atualização e exclusão de transações na API.
 * 
 * @@Injectable indica que o serviço pode ser injetado em outros componentes ou serviços do Angular.
 */
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  /**
   * URL base para as operações de transação.
   * @private
   */
  private apiUrl = 'http://localhost:8000/api/transactions';

  /**
   * Construtor da classe TransactionService.
   * 
   * @param http - Serviço HttpClient do Angular para fazer requisições HTTP.
   */
  constructor(private http: HttpClient) { }

  /**
   * Obtém a lista de transações.
   * 
   * @returns Um Observable que emite a resposta da API com a lista de transações.
   */
  getTransactions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  /**
   * Adiciona uma nova transação.
   * 
   * @param transaction - Objeto que contém os dados da transação a ser criada.
   * @returns Um Observable que emite a resposta da API após a criação da transação.
   */
  addTransaction(transaction: any): Observable<any> {
    return this.http.post(this.apiUrl, transaction);
  }

  /**
   * Atualiza uma transação existente.
   * 
   * @param id - ID da transação a ser atualizada.
   * @param transaction - Objeto contendo os novos dados da transação.
   * @returns Um Observable que emite a resposta da API após a atualização.
   */
  updateTransaction(id: number, transaction: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, transaction);
  }

  /**
   * Exclui uma transação.
   * 
   * @param id - ID da transação a ser excluída.
   * @returns Um Observable que emite a resposta da API após a exclusão.
   */
  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
