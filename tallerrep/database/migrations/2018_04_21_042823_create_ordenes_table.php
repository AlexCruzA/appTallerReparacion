<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdenesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ordenes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cliente');
            $table->string('tecnico');
            $table->string('notaUno');
            $table->string('notaDos');
            $table->string('fotos');
            $table->string('repuestos');
            $table->string('estado');
            $table->date('fechaIngreso');
            $table->date('fechaEntrega');
            $table->string('firma');
            $table->double('costo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ordenes');
    }
}
