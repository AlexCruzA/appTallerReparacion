<?php

namespace App\Http\Controllers;

use App\Repuesto;
use Illuminate\Http\Request;

class RepuestoController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Repuesto::search($request->q);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Repuesto::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Repuesto  $repuesto
     * @return \Illuminate\Http\Response
     */
    public function show(Repuesto $repuesto)
    {
        return Repuesto::find($repuesto->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Repuesto  $repuesto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Repuesto $repuesto)
    {
        $repuesto->update($request->all());
        return $repuesto;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Repuesto  $repuesto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Repuesto $repuesto)
    {
        $repuesto->destroy($repuesto->id);
    }
}
