<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Todo</title>
  <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css">
  <link rel="stylesheet" href="app/css/animate.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet">
  <style>
    .hide-input {
      visibility: hidden;
      height: 0 !important;
      margin: 0;
    }
    .picker__date-display {
      background: #aed581;
    }
    .datepicker {
      cursor: pointer;
    }
    .picker__weekday-display {
      background: #8bc34a;
    }
    .picker__day--selected, 
    .picker__day--selected:hover, 
    .picker--focused .picker__day--selected {
      background: #aed581;
    }
    label {
      pointer-events: none;
    }
    .collection {
      border: 0 !important;
    }
    .collection-item {
      position: relative;
      transition: all .4s;
      overflow: hidden;
      min-height: 115px;
      background: #f7f7f7 !important;
      padding-bottom: 20px !important;
      box-sizing: border-box;
      padding-right: 120px !important;
      padding-left: 40px !important;
    }
    .collection-item.done-it {
      opacity: .2;
    }   

    .collection-item.done-it .doneForm {
      display: none;
    }
    .collection-item h3 {
      position: absolute;
      left: 20px;
      top: -8px;
      font-size: 15px;
      font-weight: bold;
    }
    .picker--opened .picker__frame {
      top: 10px;
      transform: scale(.85);
    }
    .logo {
      width: 150px;
      padding-top: 18px;
    }
    .collection-item__date {
      position: absolute;
      right: 20px;
      font-size: 16px;
      top: 10px;
      font-weight: bolder;
    }
    body {
      font-family: "Open Sans";
    }
    .delete {
      padding: 0 13px;
      position: absolute;
      bottom: 15px;
      right: 20px;
    }        
    .done {
      padding: 0 13px;
      height: 35px;
      position: absolute;
      bottom: 16px;
      right: 70px;
    }
    a:active,
    a:focus,
    a:hover,
    a {
      outline: none
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
</head>
<body>
