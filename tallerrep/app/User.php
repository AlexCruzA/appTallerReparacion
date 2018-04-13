<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'rol',
    ];

    public static function search($query = '')
    {
      if (!$query) {
        return self::all();
      }
      return self::where('name', 'ilike', "%$query%")
                  ->orWhere('email', 'ilike', "%$query%")
                  ->orWhere('password', 'ilike', "%$query%")
                  ->orWhere('rol', 'ilike', "%$query%");
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
