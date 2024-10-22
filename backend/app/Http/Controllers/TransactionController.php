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
        $request->validate([
            'description' => 'required|string|max:255',
            'amount' => 'required|numeric',
            'category' => 'required|string|max:50',
            'type_id' => 'required|exists:transaction_types,id',
        ]);

        $transaction = Transaction::create($request->all());
        return response()->json($transaction, 201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'description' => 'required|string|max:255',
            'amount' => 'required|numeric',
            'category' => 'required|string|max:50',
            'type_id' => 'required|exists:transaction_types,id',
        ]);

        $transaction = Transaction::findOrFail($id);
        $transaction->update($request->all());
        return response()->json($transaction, 200);}

    public function destroy($id) {
        Transaction::destroy($id);
        return response()->noContent();
    }

    
}
