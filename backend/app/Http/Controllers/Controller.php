<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index() {
        return Transaction::with('type')->get();
    }

    public function store(Request $request) {
    // Validação dos dados recebidos na requisição
    $request->validate([
        'data' => 'required|date', // Verifica se o campo "data" é obrigatório e está no formato de data
        'valor' => 'required|numeric', // Verifica se o campo "valor" é obrigatório e é numérico
        'categoria' => 'required|string|max:50', // Verifica se o campo "categoria" é obrigatório, é uma string e tem no máximo 50 caracteres
        'tipo' => 'required|exists:transaction_types,id', // Verifica se o campo "tipo" é obrigatório e se existe uma correspondência no banco de dados na tabela "transaction_types" com base no "id"
    ]);

    // Criação da transação com os dados validados
    return Transaction::create($request->all()); // Cria uma nova entrada no banco de dados usando os dados da requisição validados
}


    public function update(Request $request, $id) {
        $transaction = Transaction::findOrFail($id);
        $transaction->update($request->all());
        return $transaction;
    }

    public function destroy($id) {
        Transaction::destroy($id);
        return response()->noContent();
    }
}

