<?php

use App\Models\Transaction;
use App\Models\TransactionType;

class TransactionController extends Controller
{
    public function index() {
        return Transaction::with('type')->get();
    }

    public function store(Request $request) {
        $request->validate([
            'data' => 'required|date',
            'valor' => 'required|numeric',
            'categoria' => 'required|string|max:50',
            'tipo' => 'required|exists:transaction_types,id',
        ]);

        return Transaction::create($request->all());
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

