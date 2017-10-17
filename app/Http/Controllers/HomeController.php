<?php

namespace CMDR\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('map');
    }

    public function region($region)
    {
        $content = file_get_contents(resource_path() . '/assets/dotlan/' . $region . '.svg.json');

        return response()->json($content);
    }
}
