<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Boleta extends Model
{

  protected $fillable = [
      'cliente', 'tecnico', 'notaUno', 'notaDos', 'fotos', 'repuestos', 'estado', 'fechaIngreso', 'fechaEntrega', 'firma', 'costo'
  ];

  public static function search($query = '')
  {
    if (!$query) {
      return self::all();
    }
    return self::where('cliente', 'like', "%$query%")
                ->orWhere('tecnico', 'like', "%$query%")
                ->orWhere('notaUno', 'like', "%$query%")
                ->orWhere('notaDos', 'like', "%$query%")
                ->orWhere('fotos', 'like', "%$query%")
                ->orWhere('repuestos', 'like', "%$query%")
                ->orWhere('estado', 'like', "%$query%")
                ->orWhere('fechaIngreso', 'like', "%$query%")
                ->orWhere('fechaEntrega', 'like', "%$query%")
                ->orWhere('firma', 'like', "%$query%")
                ->orWhere('costo', '=', doubleval($query))->get();
  }
}
