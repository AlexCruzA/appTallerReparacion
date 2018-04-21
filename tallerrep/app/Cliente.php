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
      return self::where('nombre', 'like', "%$query%")
                  ->orWhere('telefono', 'like', "%$query%")
                  ->orWhere('cedula','like', "%$query%")
                  ->orWhere('direccion','like', "%$query%");
    }
}
