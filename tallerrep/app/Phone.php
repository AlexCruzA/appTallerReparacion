<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    protected $fillable = [
        'name', 'manufacturer', 'price'
    ];

    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('name', 'ilike', "%$query%")
                  ->orWhere('manufacturer', 'ilike', "%$query%")
                  ->orWhere('price', '=', intval($query))->get();
    }
}
