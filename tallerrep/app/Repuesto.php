<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Repuesto extends Model
{
    protected $fillable = [
        'nombre', 'marca', 'descripcion'
    ];

    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('nombre', 'ilike', "%$query%")
                  ->orWhere('marca', 'ilike', "%$query%")
                  ->orWhere('descripcion', 'ilike', "%$query%");
    }
}
