<?php

namespace App\Http\Controllers;

use App\Phone;
use Illuminate\Http\Request;

class PhoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Phone::search($request->q);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Phone::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Phone  $phone
     * @return \Illuminate\Http\Response
     */
    public function show(Phone $phone)
    {
        return Phone::find($phone->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Phone  $phone
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Phone $phone)
    {
        $phone->update($request->all());
        return $phone;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Phone  $phone
     * @return \Illuminate\Http\Response
     */
    public function destroy(Phone $phone)
    {
        $phone->destroy($phone->id);
    }
}
