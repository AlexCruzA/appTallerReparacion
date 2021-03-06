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
      return self::where('nombre', 'like', "%$query%")
                  ->orWhere('marca', 'like', "%$query%")
                  ->orWhere('descripcion', 'like', "%$query%");
    }
}
