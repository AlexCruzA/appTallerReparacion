<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = [
        'nombre', 'telefono', 'cedula', 'direccion'
    ];

    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('nombre', 'ilike', "%$query%")
                  ->orWhere('telefono', 'ilike', "%$query%")
                  ->orWhere('cedula','ilike', "%$query%")
                  ->orWhere('direccion','ilike', "%$query%");;
    }
}
