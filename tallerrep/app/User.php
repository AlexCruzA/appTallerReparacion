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
      return self::where('name', 'like', "%$query%")
                  ->orWhere('email', 'like', "%$query%")
                  ->orWhere('password', 'like', "%$query%")
                  ->orWhere('rol', 'like', "%$query%");
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
