<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <link rel="stylesheet" href="{{mix('css/app.css')}}">
</head>
<body>

<div id="app">
    <n3-container fluid class="container">
        <n3-row>
            <n3-column :col="9" class="context map-grid">
                <dotlan-map></dotlan-map>
            </n3-column>
            <n3-column :col="3" class="context">
                Nothing
            </n3-column>
        </n3-row>
    </n3-container>

    <n3-aside  placement="left" title="Title" width="350px" ref="asideLeft" id="info-panel">
        <h4>left</h4>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <n3-button @click.native="closeInfoPanel">close</n3-button>
    </n3-aside>


</div>

<script src="{{mix('js/app.js')}}"></script>

</body>
</html>
