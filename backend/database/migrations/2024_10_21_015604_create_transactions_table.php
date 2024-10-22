<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->enum('tipo', ['despesa', 'receita']);
            $table->string('categoria');
            $table->decimal('valor', 10, 2);
            $table->date('data');
            $table->text('descricao')->nullabe();
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
